import { prisma } from "../db";

export const getComments = async (req, res) => {
  const { snippetId } = req.params;
  try {
    const comments = await prisma.comment.findMany({
      where: {
        snippetId,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    res.json({
      success: true,
      data: comments,
      message: "Comments fetched successfully",
      errors: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "An unexpected error occurred",
      errors: error,
    });
  }
};
export const createComment = async (req, res) => {
  const { snippetId } = req.params;
  const { content } = req.body;
  const authorId = req.user.id;
  try {
    const comment = await prisma.comment.create({
      data: {
        content,
        snippetId,
        authorId,
      },
    });
    res.json({
      success: true,
      data: comment,
      message: "Comment created successfully",
      errors: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "An unexpected error occurred",
      errors: error,
    });
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const authorId = req.user.id;
  try {
    const comment = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    });
    if (!comment) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Comment not found",
        errors: null,
      });
    }
    if (comment.authorId !== authorId) {
      return res.status(403).json({
        success: false,
        data: null,
        message: "You are not authorized to delete this comment",
        errors: null,
      });
    }
    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    });
    res.json({
      success: true,
      data: null,
      message: "Comment deleted successfully",
      errors: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "An unexpected error occurred",
      errors: error,
    });
  }
};

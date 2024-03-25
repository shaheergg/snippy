import { prisma } from "../db";

export const getSnippets = async (req, res) => {
  const userId = req.user.id;
  try {
    const snippets = await prisma.snippet.findMany({
      where: {
        authorId: userId,
      },
      select: {
        id: true,
        title: true,
        description: true,
        language: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      data: snippets,
      message: "Snippets fetched successfully",
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

export const getSnippet = async (req, res) => {
  const authorId = req.user.id;
  const { id } = req.params;
  try {
    const snippet = await prisma.snippet.findUnique({
      where: {
        id,
        authorId,
      },
    });

    if (!snippet) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Snippet not found",
        errors: null,
      });
    }

    res.json({
      success: true,
      data: snippet,
      message: "Snippet fetched successfully",
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

export const createSnippet = async (req, res) => {
  const authorId = req.user.id;
  const { title, description, language, visibility } = req.body;
  try {
    const snippet = await prisma.snippet.create({
      data: {
        title,
        description,
        language,
        authorId,
        visibility,
      },
    });

    res.status(201).json({
      success: true,
      data: snippet,
      message: "Snippet created successfully",
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

export const updateSnippet = async (req, res) => {
  const authorId = req.user.id;
  const { id } = req.params;
  const { title, description, language, code } = req.body;
  try {
    const snippet = await prisma.snippet.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        language,
        code,
      },
    });

    res.json({
      success: true,
      data: snippet,
      message: "Snippet updated successfully",
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
export const changeSnippetVisibility = async (req, res) => {
  const authorId = req.user.id;
  const { id } = req.params;
  const { visibility } = req.body;
  try {
    const snippet = await prisma.snippet.update({
      where: {
        id,
        authorId,
      },
      data: {
        visibility,
      },
    });

    res.json({
      success: true,
      data: snippet,
      message: "Snippet visibility updated successfully",
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
export const deleteSnippet = async (req, res) => {
  const authorId = req.user.id;
  const { id } = req.params;
  try {
    const snippet = await prisma.snippet.delete({
      where: {
        id,
        authorId,
      },
    });

    res.json({
      success: true,
      data: snippet,
      message: "Snippet deleted successfully",
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

import { prisma } from "../db";

export const createFork = async (req, res) => {
  const userId = req.user.id;
  const { snippetId } = req.params;
  try {
    const fork = await prisma.fork.create({
      data: {
        snippetId: parseInt(snippetId),
        authorId: userId,
      },
    });

    res.json({
      success: true,
      data: fork,
      error: null,
      message: "Fork created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      error: "Failed to create fork",
      message: error.message,
    });
  }
};

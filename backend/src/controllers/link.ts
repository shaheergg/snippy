import { prisma } from "../db";

export const getLinks = async (req, res) => {
  const userId = req.user.id;
  try {
    const links = await prisma.link.findMany({
      where: {
        userId,
      },
    });

    res.json({
      success: true,
      data: links,
      message: "Links fetched successfully",
      errors: null,
    });
  } catch (error) {}
};

export const createLink = async (req, res) => {
  const userId = req.user.id;
  const { name, url } = req.body;
  try {
    const link = await prisma.link.create({
      data: {
        name,
        url,
        userId: userId,
      },
    });

    res.json({
      success: true,
      data: link,
      message: "Link created successfully",
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

export const updateLink = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  const { name, url } = req.body;
  try {
    const link = await prisma.link.update({
      where: {
        id,
      },
      data: {
        name,
        url,
      },
    });

    res.json({
      success: true,
      data: link,
      message: "Link updated successfully",
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

export const deleteLink = async (req, res) => {
  const userId = req.user.id;
  const { id } = req.params;
  try {
    await prisma.link.delete({
      where: {
        id,
      },
    });

    res.json({
      success: true,
      data: null,
      message: "Link deleted successfully",
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

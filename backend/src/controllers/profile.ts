import { prisma } from "../db";

export const getProfile = async (req, res) => {
  const userId = req.user.id;
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Profile not found",
        errors: null,
      });
    }
    res.json({
      success: true,
      data: profile,
      message: "Profile fetched successfully",
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

export const updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { bio } = req.body;
  try {
    const profile = await prisma.profile.upsert({
      where: {
        userId,
      },
      update: {
        bio,
      },
      create: {
        bio,
        userId,
      },
    });

    res.json({
      success: true,
      data: profile,
      message: "Profile updated successfully",
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

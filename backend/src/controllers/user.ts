import { prisma } from "../db";
import { comparePassword } from "../lib";

export const createUser = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });
    res.json({
      scuccess: true,
      data: user,
      message: "User registered successfully",
      errors: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: "Failed to register user",
      errors: error,
    });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "User not found",
        errors: null,
      });
    }

    const isPasswordMatch = comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Invalid password",
        errors: null,
      });
    }

    res.json({
      success: true,
      data: user,
      message: "User logged in successfully",
      errors: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: "Failed to login",
      errors: error,
    });
  }
};

export const getUser = async (req, res) => {
  const id = req.user.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.json({
      success: true,
      data: user,
      message: "User found",
      errors: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      data: null,
      message: "Failed to get user",
      errors: error,
    });
  }
};

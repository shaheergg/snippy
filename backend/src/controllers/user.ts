import { prisma } from "../db";
import { comparePassword, generateToken } from "../lib";

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
    const token = generateToken(user);

    res.json({
      scuccess: true,
      data: { token },
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
      return res.status(404).json({
        success: false,
        data: null,
        message: "User not found",
        errors: null,
      });
    }

    const isPasswordMatch = comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        data: null,
        message: "Invalid password",
        errors: null,
      });
    }
    const token = generateToken(user);
    res.json({
      success: true,
      data: { token },
      message: "User logged in successfully",
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
      message: "User fetched successfully",
      errors: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: null,
      message: "Failed to get user",
      errors: error,
    });
  }
};

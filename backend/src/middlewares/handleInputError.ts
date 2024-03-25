import { validationResult } from "express-validator";

export const handleInputError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Input error",
      errors: errors.array(),
    });
  }

  next();
};

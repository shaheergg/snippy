import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { Request, Response, NextFunction } from "express";

interface User {
  id: number;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
export const protect = (req: Request, res: Response, next: NextFunction) => {
  console.log("protect");
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.json({ message: "not authorized" });
    return;
  }
  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user as User;
    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    res.json({ message: "not valid token" });
    return;
  }
};

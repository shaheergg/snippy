import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashPassword = (password: string) => {
  const hash = bcrypt.hashSync(password, 10);
  return hash;
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: any) => {
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "5d",
    }
  );
  return token;
};

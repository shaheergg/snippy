import express from "express";
import { router } from "./router";
import cors from "cors";
import morgran from "morgan";
import { protect } from "./middlewares/auth";
import { createUser, signIn } from "./controllers/user";
import { body } from "express-validator";
import { handleInputError } from "./middlewares/handleInputError";

const app = express();

app.use(cors());
app.use(morgran("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, router);
app.post(
  "/signin",
  body("email").isEmail(),
  body("password").isString(),
  body("name").isString(),
  handleInputError,
  signIn
);
app.post(
  "/register",
  body("email").isEmail(),
  body("password").isString(),
  body("name").isString(),
  handleInputError,
  createUser
);
export default app;

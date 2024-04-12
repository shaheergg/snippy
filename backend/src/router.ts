import { Router } from "express";
import { body } from "express-validator";
import { getProfile, updateProfile } from "./controllers/profile";
import { handleInputError } from "./middlewares/handleInputError";
import {
  createLink,
  deleteLink,
  getLinks,
  updateLink,
} from "./controllers/link";
import {
  changeSnippetVisibility,
  createSnippet,
  deleteSnippet,
  getSnippet,
  getSnippets,
  updateSnippet,
} from "./controllers/snippet";
import {
  createComment,
  deleteComment,
  getComments,
} from "./controllers/comment";

const router = Router();

// -- profile routes --
router.get("/profile", getProfile);
router.put(
  "/profile",
  body("bio").isString().optional(),
  handleInputError,
  updateProfile
);
// -- end profile routes --

// -- link routes --
router.get("/links", getLinks);
router.post(
  "/links",
  body("name").isString(),
  body("url").isURL(),
  handleInputError,
  createLink
);
router.put(
  "/links/:id",
  body("name").isString(),
  body("url").isURL(),
  handleInputError,
  updateLink
);
router.delete("/links/:id", deleteLink);
// -- end link routes --

//-- snippet routes --

router.get("/snippets", getSnippets);
router.get("/snippets/:id", getSnippet);
router.post("/snippets", createSnippet);
router.put("/snippets/:id", updateSnippet);
router.put("/snippets/:id/visibility", changeSnippetVisibility);
router.delete("/snippets/:id", deleteSnippet);

//-- end snippet routes --

// -- comment routes --
router.get("/snippets/:snippetId/comments", getComments);
router.post("/snippets/:snippetId/comments", createComment);
router.delete("/comments/:commentId", deleteComment);

// -- end comment routes --

// -- code execution routes --

export default router;

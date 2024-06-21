import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  countUsers,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/count", countUsers);

export default router;

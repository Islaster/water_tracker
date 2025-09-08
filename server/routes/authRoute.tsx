import { Router } from "express";
import {
  findOneUser,
  removeUser,
  addUser,
  allUsers,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.post("/add/user", addUser);
router.get("/users", allUsers);
router.get("/user/:id", findOneUser);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", removeUser);

export default router;

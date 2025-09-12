import { Router } from "express";
import {
  findOneUser,
  removeUser,
  addUser,
  allUsers,
  updateUser,
} from "../controllers/userController";

const router = Router();

router.post("/user/add", addUser);
router.post("/login", findOneUser);
router.get("/users", allUsers);
router.patch("/user", updateUser);
router.delete("/user", removeUser);

export default router;

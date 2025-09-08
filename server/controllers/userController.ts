import { Request, Response } from "express";
import {
  createUser,
  editUser,
  deleteUser,
  findAllUsers,
  findUserById,
} from "../services/users";

export async function addUser(req: Request, res: Response) {
  try {
    const { user, email, pass } = req.body;
    if (!user || !pass || !email) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newUser = await createUser(user, pass, email);
    res.status(201).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { editField, column } = req.body;
    const id = Number(req.params.id);
    if (!editField)
      return res.status(400).json({ message: "missing edit value" });
    if (Number.isNaN(id))
      return res.status(400).json({ message: "Invalid user id" });
    if (!column)
      return res.status(400).json({ message: "missing field to edit" });

    const editedUser = await editUser(editField, id, column);
    res.status(200).json(editedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function removeUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id))
      return res.status(400).json({ message: "Invalid user id" });
    const deletedUser = await deleteUser(id);
    res.status(204).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function allUsers(req: Request, res: Response) {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function findOneUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id))
      return res.status(400).json({ message: "Invalid user id" });
    const user = await findUserById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

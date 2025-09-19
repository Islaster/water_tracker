import { Request, Response } from "express";
import {
  getWaterLogs,
  createWaterLog,
  getLatestUserWaterLogs,
} from "../services/waterLogs";
import { io } from "../server";

export async function addWaterEntry(req: Request, res: Response) {
  try {
    const { amount, user_id, unit } = req.body;

    const latestEntries = await getLatestUserWaterLogs(user_id);
    const newEntry = await createWaterLog(amount, unit, user_id);
    io.emit("waterLogs", latestEntries);
    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getAllWaterEntries(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const entries = await getWaterLogs();
    res.status(200).json(entries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

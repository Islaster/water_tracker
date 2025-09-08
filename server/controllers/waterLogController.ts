import { Request, Response } from "express";
import { getWaterLogs, createWaterLog } from "../services/waterLogs";

export function addWaterEntry(req: Request, res: Response) {
  try {
    const { amount, user_id, unit } = req.body;

    const newEntry = createWaterLog(amount, unit, user_id);
    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export function getAllWaterEntries(res: Response, req: Request) {
  try {
    const entries = getWaterLogs();
    res.status(200).json(entries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

import { Router } from "express";
import {
  addWaterEntry,
  getAllWaterEntries,
} from "../controllers/waterLogController";

const router = Router();

router.post("/add/water", addWaterEntry);
router.get("water", getAllWaterEntries);

export default router;

import { Router } from "express";
import {
  addWaterEntry,
  getAllWaterEntries,
} from "../controllers/waterLogController";

const router = Router();

router.post("/water/add", addWaterEntry);
router.get("/waters", getAllWaterEntries);

export default router;

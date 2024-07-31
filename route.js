import {
	getSnapPerf,
	getTest,
} from "./controllers/SnapPreferenceController.js";
import express from "express";

const router = express.Router();

router.post("/snap", getSnapPerf);
router.get("/", getTest);

export default router;

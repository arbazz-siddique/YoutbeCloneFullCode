import express from "express";
import { upgradeSubscription } from "../Controllers/SubscriptionController.js";

const router = express.Router();

router.post("/upgrade", upgradeSubscription);


export default router;


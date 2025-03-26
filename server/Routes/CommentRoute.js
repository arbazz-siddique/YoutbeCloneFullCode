import express from "express"

import { getcomment,deletecomment,postcomment,editcomment } from "../Controllers/CommentController.js"
import auth from "../Middlewares/AuthMiddleware.js"

const router = express.Router();

router.post("/post", auth, postcomment)
router.get("/get", getcomment)
router.delete("/delete/:id", auth, deletecomment)
router.patch("/edit/:id", auth, editcomment)

export default router 
import express from "express"
import { likevideocontroller } from "../Controllers/LikeController.js";
import { viewscontroller } from "../Controllers/ViewsController.js";
import { uploadvideo,getallvideos } from "../Controllers/VideoController.js";
import upload from "../Helper/filehelper.js";
import auth from "../Middlewares/AuthMiddleware.js";
import { historycontroller, deletehistory, getallhistorycontroller } from "../Controllers/HistoryController.js";
import { watchlatercontroller, getallwatchlatercontroller, deletewatchlater } from "../Controllers/WatchlaterController.js";

import { likedvideocontroller,getalllikedvideo,deletelikedvideo } from "../Controllers/LikevideoController.js";
const routes = express.Router();

routes.post("/uploadvideo", upload.single("file"), uploadvideo);


routes.post("/history", historycontroller)
routes.get("/getallhistory", getallhistorycontroller)
routes.delete("/deletehistory/:userid", deletehistory)

routes.get("/getvideos", getallvideos)
routes.patch("/like/:id", auth, likevideocontroller)
routes.patch("/views/:id", viewscontroller)


// here i have to modify
routes.post('/watchlater',auth,watchlatercontroller)
routes.get('/getallwatchlater',getallwatchlatercontroller)
routes.delete('/deletewatchlater/:videoid/:viewer',auth,deletewatchlater)

routes.post('/likevideo',auth,likedvideocontroller)
routes.get('/getalllikevide',getalllikedvideo)
routes.delete('/deletelikevideo/:videoid/:viewer',auth,deletelikedvideo)

export default routes
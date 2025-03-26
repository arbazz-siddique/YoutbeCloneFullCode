import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"

import { createServer } from "http";
import { Server } from "socket.io";

import userroutes  from "./Routes/UserRoute.js"
import videoroutes from "./Routes/VideoRoute.js"
import grouproute from "./Routes/GroupRoute.js"
import path from "path"

import commentroutes from "./Routes/CommentRoute.js"
import subscriptionRoutes from "./Routes/subscriptionRoute.js"

dotenv.config()

const app = express();
const server = createServer(app);

app.use(cors())
app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))


app.get('/', (req,res)=>{
    res.send("Your tube is working yahhh")
})

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});


io.on("connection", (socket) => {
    // console.log("A user connected");

    socket.on("join_group", ({ groupId, userId }) => {
        socket.join(groupId);
        // console.log(`User ${userId} joined group ${groupId}`);
    });

    socket.on("send_message", (data) => {
        // console.log("Message received:", data);
        io.to(data.groupId).emit("receive_message", {
            groupId: data.groupId,
            sender: data.sender || "Unknown", // Ensure sender is set
            text: data.text,
        });
    });
    

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});


app.use(bodyParser.json())
app.use('/user',userroutes)
app.use('/video', videoroutes)
app.use('/comment', commentroutes)
app.use('/group',grouproute)
app.use("/subscription", subscriptionRoutes)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const DB_URL = process.env.DB_URL

mongoose.connect(DB_URL).then(()=>{
    console.log("MongoDB Connected")
}).catch((error)=>{
    console.log(error)
})
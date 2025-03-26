import CommentModel from "../Models/CommentModel.js";

import mongoose from "mongoose";

export const postcomment = async(req,res)=>{
    const commentdata = req.body;
    const postcomment = new CommentModel(commentdata)
    try {
        await postcomment.save()
        res.status(400).json({ message:" Posted the commment" });
    } catch (error) {
        res.status(400).json({message: error.message})
        return
    }
}

export const getcomment = async(req,res)=>{
    try {
        const commentlist = await CommentModel.find()
        res.status(200).send(commentlist)
    } catch (error) {
        res.status(400).json({message: error.message})
        return
    }
}

export const deletecomment = async(req,res)=>{
    const {id:_id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).send("Comment unavailable..")
    }

    try {
         await CommentModel.findByIdAndDelete(_id);
         res.status(200).json({message:"Deleted Comment"})
    } catch (error) {
        res.status(400).json({message: error.message})
        return
    }
}

export const editcomment = async(req,res)=>{
    const {id:_id}= req.params;
    const {commentbody} = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(400).send("Comment unavailable..")
}
    try {
        const updatecomment = await CommentModel.findByIdAndUpdate(
            _id,
            {$set:{"commentbody":commentbody}}
        )
        res.status(200).json(updatecomment)
    } catch (error) {
        res.status(400).json({message: error.message})
        return
    }
}
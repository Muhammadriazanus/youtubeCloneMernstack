import express from "express"
import {addComment, deleteComment, getComments} from "../controller/commentController.js"
import {verifyToken} from "../verifyToken.js"
const commentAuthRouter = express.Router()

commentAuthRouter.post("/",verifyToken,addComment)
commentAuthRouter.delete("/:id",verifyToken,deleteComment)
commentAuthRouter.get("/:videoId",verifyToken,getComments)

export default  commentAuthRouter
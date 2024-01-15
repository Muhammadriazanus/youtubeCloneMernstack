import express from "express"
import {update,DeleteUser,getUser,subscribe,unsubscribe,like,dislike} from "../controller/userController.js"
import { verifyToken } from "../verifyToken.js"
const userAuthRouter = express.Router()

// update user
userAuthRouter.put("/:id",verifyToken,update)

//delete a user

userAuthRouter.delete("/:id",verifyToken,DeleteUser)

// get a user
userAuthRouter.put("/find/:id",getUser)

//subscribe a user
userAuthRouter.put("/sub/:id",verifyToken,subscribe)

//unsubscribe a user
userAuthRouter.put("/unsub/:id",verifyToken,unsubscribe)


//like a user
userAuthRouter.put("/like/:videoId",verifyToken,like)



// dislike a user
userAuthRouter.put("/dislike/:videoId",verifyToken,dislike)
export default  userAuthRouter
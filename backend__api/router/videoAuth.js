import express from "express"
import { addVideo,updateVideo,getByTags,search, deleteVideo,getVideo,sub,addView,trend,random} from "../controller/videoController.js"
import { verifyToken } from "../verifyToken.js"
const videoAuthRouter = express.Router()
// create a video
videoAuthRouter.post("/",verifyToken,addVideo)
videoAuthRouter.put("/:id",verifyToken,updateVideo)
videoAuthRouter.delete("/:id",verifyToken,deleteVideo)
videoAuthRouter.get("/find/:id",getVideo)
videoAuthRouter.put("/view/:id" ,addView)
videoAuthRouter.get("/random" ,random)
videoAuthRouter.get("/trend",trend)
videoAuthRouter.get("/sub",verifyToken,sub)
videoAuthRouter.get("/tags",getByTags)
videoAuthRouter.get("/search",search)


export default  videoAuthRouter
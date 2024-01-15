import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js"

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            const upDateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            },
            {new : true}
            )
            res.status(200).json(upDateUser)
        } catch (error) {
            next(err)
        }
    } else {
        return next(createError(403, "you can update only your account!"))    
    }
}

export const DeleteUser = async(req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
             await User.findByIdAndDelete(
                req.params.id, 
            )
            res.status(200).json("user has been deleted")
        } catch (error) {
            next(err)
        }
    } else {
        return next(createError(403, "you can update only your account!"))    
    }

}
export const getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (error) {
        next(err)
    }
}
export const subscribe = async(req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $push : {subscribedUser:req.params.id},

        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc :{subscribers : 1}
        })
        res.status(200).json("subscription successful")
    } catch (error) {
        next(err)
    }


}
export const unsubscribe = async(req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id,{
            $pull : {subscribedUser:req.params.id},

        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc :{subscribers : -1}
        })
        res.status(200).json("Unsubscription successful")
    } catch (error) {
        next(err)
    }
}
export const like = async(req, res, next) => {
    const id = req.user.id;
    const videoId = req.user.videoId;
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet  : {likes:id},  
               // addToSet check your id in the array only one
            $pull : {dislikes:id}
        })
        res.status(200).json("the video has been likes")
    } catch (error) {
        next(err)
    }

}
export const dislike = async(req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try {
        await Video.findByIdAndUpdate(videoId,{
            $addToSet  : {dislikes:id},  
               // addToSet check your id in the array only one
            $pull : {likes:id}
        })
        res.status(200).json("the video has been dislikes")
    } catch (error) {
        
    }

}
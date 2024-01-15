// import { Promise } from "mongoose"
import { createError } from "../error.js"
import Video from "../models/Video.js"
import User from "../models/User.js"
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const saveVideo = await newVideo.save()
        res.status(200).json(saveVideo)
    } catch (error) {
        next(err)
    }
}
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "videos not found"))
        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "you can only update your account"))
        }
    } catch (error) {
        next(err)
    }

}

export const deleteVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "videos not found"))
        if (req.user.id === video.userId) {
            await Video.findByIdAndUpdate(
                req.params.id,

            );
            res.status(200).json("video has been deleted")
        } else {
            return next(createError(403, "you can only update your account"))
        }
    } catch (error) {
        next(error)
    }
}

export const getVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id)
        res.status(200).json(video)

    } catch (error) {
        next(error)
    }
}
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { view: 1 }
        })
        res.status(200).json("The view has been increased")

    } catch (error) {
        next(error)
    }
}
export const random = async (req, res, next) => {
    try {
        const video = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(video)

    } catch (error) {
        next(error)
    }
}
export const trend = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({ view: -1 })
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}
export const sub = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUser;
        const list = await Promise.all(
            subscribedChannels.map(channelsId => {
                return Video.find({ userId: channelsId })

            })
        )
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(error)
    }
}
export const getByTags = async (req, res, next) => {
    const tags = req.query.tags.split(",")
    console.log(tags);
    try {
        const videos = await Video.find({ tags:{ $in: tags }}).limit(20)
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }

}
export const search = async (req, res, next) => {
    const query = req.query.q
    try {
        const videos = await Video.find({
            title : {$regex : query, $options : "i"},
        }).limit(40);
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }

}
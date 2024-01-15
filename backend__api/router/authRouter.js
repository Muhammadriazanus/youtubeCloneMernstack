import express from "express"
import {signup,signin, googleAuth} from "../controller/authController.js"
const AuthRouter = express.Router()
// create User 
AuthRouter.post("/signup",signup)
// sign in User
AuthRouter.post("/signin",signin)
// google auth
AuthRouter.post("/googleAuth",googleAuth)

export default  AuthRouter
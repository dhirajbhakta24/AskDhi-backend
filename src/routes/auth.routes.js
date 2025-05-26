import express from "express"
import { signUp } from "../controllers/auth/signUp.js";
import { Login } from "../controllers/auth/login.js";
import { logOut } from "../controllers/auth/logout.js";

const authRouter = express.Router();

authRouter.post("/signup",signUp)
authRouter.post("signin",Login)
authRouter.get("logout",logOut)

export default authRouter
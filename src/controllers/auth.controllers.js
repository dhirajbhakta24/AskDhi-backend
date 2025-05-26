import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js"

 export const signUp = async (req,res)=>{
    try {
        const {name,email,password} = req.body

        const existEmail = await User.findOne({email})
        if(existEmail){
            return res.status(400).json({message :"email already exists !"})
        }
        if(password.length<6){
            return res.status(400).json({message:"password must be atleast 6 characters !"})
        }

        //encrypting password using bcryptjs

        const hashedPassword = await bcrypt.hash(password,10)

        //creating user
        const user = await User.create({
            name,
            password:hashedPassword,
            email
        })
        
        //generating token
        const token = await genToken(user._id);

        //parsing token 
        res.cookie("token": token,
            {
                httpOnly:true,
                masAge:7*24*60*60*1000,
                sameSite:"strict",
                secure : false
            }
        )
        return res.status(201).json(user)

    } catch (error) {
        return res.status(500).json({message:`signUP error ${error}`});
    }
}
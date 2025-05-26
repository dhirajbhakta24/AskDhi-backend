import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/server.config.js"

const genToken = async (userId)=>{
    try{
        const token =await jwt.sign({userId},
            JWT_SECRET,
            {expiresIn:"15d"}
        )
        return token ;
    }
    catch(error){
        console.log(error);
    }
}
export default genToken;
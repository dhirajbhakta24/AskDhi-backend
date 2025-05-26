import mongoose from "mongoose"
import {ATLAS_DB_URL} from "./server.config.js"


const connectToDB = async()=>{
    try{
        await mongoose.connect(ATLAS_DB_URL);
        console.log("db connected");
}
    catch(error){
        console.log(error);
    }
}
export default connectToDB;
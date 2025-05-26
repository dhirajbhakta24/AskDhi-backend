import express from "express"
import {PORT} from "./src/config/server.config.js"
import connectToDB from "./src/config/db.config.js"

const app = express();

app.get("/ping",(req,res)=>{
   return res.json({message:"the backend is alive and running"});
})

app.listen(PORT,async ()=>{
    console.log(`Server started at PORT:${PORT}`);
    await connectToDB();
    console.log("successfully connected to database");
})
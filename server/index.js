import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js"

dotenv.config({
    path: './env'
});

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port http://localhost:${process.env.PORT}`);     
    })
    app.on("error", (error) => {
        console.log("ERROR: Server Running error", error);
        throw error  
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!!", err);
})
 
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.get(`/`, (req, res) => {
    res.send(`Server runs well.`)
})

app.listen(5000,()=>{
    console.log(`Server runs on port 5000`)
})
import express from "express";
import  eventRouter from "./routes/events.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use("/create-event", eventRouter)


app.listen(port, () => {
    console.log("Server started on port 3000")
})
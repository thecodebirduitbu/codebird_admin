import { Express } from "express";
import { Router } from "express";
import mongoose from "mongoose";

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    registrationDate: Date,
    mode: String,
    poster: String,

})

const event = mongoose.model('event', eventSchema);





Router.post('/create-event', async (req, res) => {
    try {
        const {name, description, date, registrationDate, mode} = req.body;

        const newEvent = new event({
            name,
            description, 
            date,
            registrationDate,
            mode,
            poster,
        })

        await newEvent.save();

        res.status(201).json({ message: "Event Created Successfully"});
    }
    catch (error){
        res.status(500).json({ error: "An error occurred while creating the event"});
    }
});



module.exports = Router;
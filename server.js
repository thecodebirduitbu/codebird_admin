import { Express } from "express";
const app = Express();

require("dotenv").config()
const eventsRoute = require("./routes/events");

app.use(Express.json());
app.use("/create-event", eventsRoute)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server started on port 8000")
})
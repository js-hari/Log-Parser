require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();

app.use(
  cors({
    origin: "https://log-parser-mgvo.onrender.com", 
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(express.json());

connectDB();

app.use("/api", trafficRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


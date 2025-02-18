require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const trafficRoutes = require("./routes/trafficRoutes");

const app = express();

// app.use(
//   cors({
//     origin: "https://log-parser-mgvo.onrender.com", 
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

app.use(cors()); 


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://log-parser-mgvo.onrender.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());

connectDB();

app.use("/api", trafficRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


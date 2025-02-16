const express = require("express");
const HourlyData = require("../models/HourlyData");
const IpData = require("../models/IpData");

const router = express.Router();

console.log("🔄 Registering API Routes...");

router.get("/hourly-traffic", async (req, res) => {
    console.log("API Hit: /api/hourly-traffic");  
    try {
        const data = await HourlyData.find().sort({ Hour: 1 });
        console.log("Hourly Traffic Data:", data);
        res.json(data);
    } catch (err) {
        console.error("Error fetching hourly traffic:", err);
        res.status(500).json({ error: "Server Error" });
    }
});

router.get("/ip-data", async (req, res) => {
    console.log("API Hit: /api/ip-data");  d
    try {
        const data = await IpData.find().sort({ Occurrences: -1 }).limit(10);
        console.log("IP Traffic Data:", data);
        res.json(data);
    } catch (err) {
        console.error("Error fetching IP traffic:", err);
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;

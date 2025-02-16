const mongoose = require("mongoose");

const HourlyDataSchema = new mongoose.Schema({
    Hour: Number,
    Visitors: Number
}, { collection: "hourly_data" }); 

module.exports = mongoose.model("HourlyData", HourlyDataSchema);

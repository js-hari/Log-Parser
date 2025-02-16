const mongoose = require("mongoose");

const IpDataSchema = new mongoose.Schema(
    {
        IP: String,
        Occurrences: Number
    },
    { collection: "ip_data" } 
);

module.exports = mongoose.model("IpData", IpDataSchema);

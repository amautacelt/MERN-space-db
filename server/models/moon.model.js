const mongoose = require("mongoose");

const MoonSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, "Name is required"]
    }

}, {timestamps: true});

// module.exports = mongoose.model("Moon", MoonSchema);
// mongoose.model("Moon", MoonSchema);
module.exports = MoonSchema;
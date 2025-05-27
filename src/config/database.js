const mongoose = require("mongoose");

const connectionDB = mongoose.connect("mongodb+srv://nishu15:Jen155@nishu0.h5wawoj.mongodb.net/nishutinder");

module.exports = connectionDB;
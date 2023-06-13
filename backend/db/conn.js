const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/apne-notes")
    .then(() => { console.log("connected to apne-notes db") })
    .catch((error) => { console.log(error) })
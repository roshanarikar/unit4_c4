const mongoose = require("mongoose")

module.exports = ()  =>{
    return mongoose.connect("mongodb+srv://arikarroshan:Arikar_123@cluster0.ppcfk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}
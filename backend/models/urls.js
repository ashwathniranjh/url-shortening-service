const mongoose = require('mongoose')

// instantiate a mongoose schema
const URLSchema = new mongoose.Schema({
    userIP: String,
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: Date.now
    }
},
{ collection: "urls" }
)

// create a model from schema and export it
module.exports = mongoose.model('Url', URLSchema)
const express = require('express'); 
const mongoose  = require('mongoose');
const bodyParser = require('body-parser')
const app = express();
require('dotenv/config');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const uri = 'mongodb+srv://user123:pass123@cluster0.ful2l.mongodb.net/url_shortener?retryWrites=true&w=majority'

const routes = require('./routes/demo');

app.use('/', routes);

try{
    mongoose.connect(
        uri, 
        {useNewUrlParser: true, useUnifiedTopology: true},
        () => {
        console.log('connected to DB')
    })
}
catch(err){
    console.log("could not connect to DB"); 
}


app.listen(5000);
    
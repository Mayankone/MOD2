const express = require('express');
const mongoose = require('mongoose');

const myItem = require('./models/items');
const app = express();

app.use(express.json());
app.use(express.static('public')); //Serving public folder


let connectionString = 'mongodb+srv://PerScholasUser:Benjiprice10@cluster0.naxgcuo.mongodb.net/MOD2?retryWrites=true&w=majority'


mongoose.set('strictQuery', false);
// connect to our MongoDB database (our Models specify which collections)
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
// function will activate once to let us know we are connected
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.post('/create_product', async (req, res) => {

    const {nameString: name, urlString: url, descriptionString: description, priceNumber: price, stockNumber: stock} = req.body;
    
    // console.log("Uploading to database");
    let returnedValue = await myItem.create({
        name,
        url,
        description,
        price,
        stock
    });

    console.log(returnedValue);
    if(returnedValue){
        console.log("Upload complete!");
    } 
    res.send(returnedValue);
}) 


app.listen(5000, () => {
    console.log("Server is listening on 5000");
})
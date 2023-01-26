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

app.get('/get_products', async (req, res) => {
    let response = await myItem.find({});
    console.log(response);
    res.json(response);
})

app.get('/get_specific_product/:productId', async (req, res) => {
    let id = req.params.productId;
    console.log(id);
    let response = await myItem.findById(id);
    console.log(response);
    res.send(response);
})

app.put('/update/:productId', async (req, res) => {
    let id = req.params.productId;
    const {newName: name, newUrl: url, newDescription: description, newPrice: price, newStock: stock} = req.body;
    let newProduct = {name, url, description, price, stock}
    let response = await myItem.findByIdAndUpdate(id, newProduct, {new:true});
    console.log("response", response);
    res.json(response)
})

app.delete("/delete/:productId", async(req, res) => {
    let id = req.params.productId;
    console.log(req.body)
    let response = await myItem.findByIdAndDelete(id)
    res.send(response)
})

app.get("/search/:product_name", async(req, res) => {
    let name = req.params.product_name;
    console.log(req.body);
    let response = await myItem.findOne({name});
    console.log(response);
    res.send(response);
})

app.listen(5000, () => {
    console.log("Server is listening on 5000");
})
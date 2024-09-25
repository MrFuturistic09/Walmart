const mongoose = require('mongoose');
let connectionString = "mongodb+srv://23010101058:J6U9vWqWaX2tBRjf@clusterbyjd.nuavl.mongodb.net/walmart";

mongoose.connect(connectionString).then(()=>{
    const bodyParser = require('body-parser');
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const prods = require('./prodSchema');

    app.get("/product",async (req,res)=> {
        try {
            const product = await prods.find();  // Use 'prods' to access the model
            res.send(product);
        } catch (err) {
            res.status(500).send("Error fetching products");
        }
    });

    app.get("/product/:name", async (req, res) => {
        const productName = req.params.name; // Get the product name from the URL parameter
        try {
            const product = await prods.findOne({ name: productName });
            if (product) {
                res.send(product);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (err) {
            res.status(500).send("Error fetching product by name");
        }
    });

    // app.post("/",(req,res)=>{

    // });
    // app.patch("/",(req,res)=>{

    // });
    app.delete("/product/:name", async (req, res) => {
        const productName = req.params.name; // Get the product name from the URL parameter
        try {
            const result = await prods.deleteOne({ name: productName });
            if (result.deletedCount > 0) {
                res.send(`Product with name ${productName} deleted successfully`);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (err) {
            res.status(500).send("Error deleting product");
        }
    });

    app.listen(9999,()=>console.log("running on 9999"));

});

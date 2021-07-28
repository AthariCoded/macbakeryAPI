
const express = require("express");
const products = require("./products");

const app = express();

//Routes
app.get("/products", (req, res) => {

    res.json(products);
});

app.listen(8000, () => {
    console.log("the application is running on localhost:8000")
});

const express = require('express');
const mysql = require('./connection/Mysql')

require("dotenv").config();
const app = express();

app.use(express.json());

const {
    getPartCategories,
    insertCategories,
    updateCategories,
    deleteCategories,
} = require("./Controller/categories");
app.get("/api/partcategories", getPartCategories);
app.post("/api/insertcategories", insertCategories);
app.put("/api/updatecategories/:id", updateCategories);
app.delete("/api/deletecategories/:id", deleteCategories);






const {
    getBrands
} = require("./Controller/brands")
app.get('/api/brands', getBrands)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
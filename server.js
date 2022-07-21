const express = require("express");
const mysql = require("./connection/Mysql");
require("dotenv").config();
const app = express();

app.use(express.json());

/* DB_HOST='us-cdbr-east-06.cleardb.net'
DB_USER='b266fc1588012d'
DB_PASS='b53e7df8'
DB_NAME='heroku_4437e23efcd1215' */
/* https://development-shops.herokuapp.com/ */
const {
  getAllShop,
  getIdShop,
  insertShop,
  updateShop,
  deleteShop,
  getPartCategories,
  insertCategories,
  updateCategories,
  deleteCategories,
} = require("./Controller/GetAllShops");
app.get("/getshops", getAllShop);
app.get("/getshop/:id", getIdShop);
app.post("/insertShop", insertShop);
app.put("/updateshop/:id", updateShop);
app.delete("/deleteshop/:id", deleteShop);
app.get("/getpartcategories", getPartCategories);
app.post("/insertcategories", insertCategories);
app.put("/updatecategories/:id", updateCategories);
app.delete("/deletecategories/:id", deleteCategories);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

const e = require("express");
const connection = require("../connection/Mysql");

// Get All Shops
const getAllShop = (req, res) => {
  let sql = `select * from shop`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

// Get id Shop

const getIdShop = (req, res) => {
  let id = req.params.id;
  let sql = `select * from shop where id = '${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

// insert shops
const insertShop = (req, res) => {
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let sql = `insert into shop (name , phone, address) VALUES ('${name}', '${phone}' , '${address}')`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.json(result);
    }
  });
};

const updateShop = (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let phone = req.body.phone;
  let address = req.body.address;
  let sql = `update shop set name='${name}' , phone='${phone}' ,address = '${address}' where id = '${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.json(result);
    }
  });
};

const deleteShop = (req, res) => {
  let id = req.params.id;
  let sql = `delete from shop where id='${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.json(result);
    }
  });
};

const getPartCategories = (req, res) => {
  let sql = `select * from partcategories`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
};

const insertCategories = (req, res) => {
  let parentid = req.body.parentid;
  let nameen = req.body.nameen;
  let namear = req.body.namear;
  let image = req.body.image;
  let sort_order = req.body.sort_order;
  let ispart = req.body.ispart;
  let descriptionnameen = req.body.descriptionnameen;
  let descriptionnamear = req.body.descriptionnamear;
  let sql = `insert into partcategories (parentid,nameen,namear,image,sort_order,ispart,descriptionnameen,descriptionnamear)VALUES
    ('${parentid}','${nameen}','${namear}','${image}' , '${sort_order}', '${ispart}' , '${descriptionnameen}','${descriptionnamear}' )`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.json(result);
    }
  });
};

const updateCategories = (req, res) => {
  let id = req.params.id;
  let parentid = req.body.parentid;
  let nameen = req.body.nameen;
  let namear = req.body.namear;
  let image = req.body.image;
  let sort_order = req.body.sort_order;
  let ispart = req.body.ispart;
  let descriptionnameen = req.body.descriptionnameen;
  let descriptionnamear = req.body.descriptionnamear;
  let sql = `update partcategories set parentid='${parentid}' , nameen='${nameen}' ,namear = '${namear}',image = '${image}', sort_order = '${sort_order}' , ispart = '${ispart}'  descriptionnameen = ${descriptionnameen} descriptionnamear = '${descriptionnamear}' where id = '${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }
    if (result) {
      res.json(result);
    }
  });
};

const deleteCategories = (req, res) => {
  let id = req.params.id;
  let sql = `delete from partcategories where id='${id}'`;
  connection.query(sql, (err, result) => {
    if (err) {
      res.json(err);
    }else
    if (result) {
      res.json(result);
    }
  });
};
module.exports = {
  getAllShop,
  getIdShop,
  insertShop,
  updateShop,
  deleteShop,
  getPartCategories,
  insertCategories,
  updateCategories,
  deleteCategories,
};

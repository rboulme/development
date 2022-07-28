const connection = require("../connection/Mysql");


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
    } else
    if (result) {
      res.json(result);
    }
  });
};
module.exports = {
  getPartCategories,
  insertCategories,
  updateCategories,
  deleteCategories,
};
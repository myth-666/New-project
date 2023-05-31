const express = require("express");
const app = express();
app.use(express.json());
var mysql = require("mysql");
const cors = require("cors");
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ownerproject",
});
con.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});

app.post("/test", (req, res) => {
  res.send("tezt");
});
app.post("/ownerdetails", (req, res) => {
  let sql = "select * from ownerdetails";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else console.log(result);
    res.send(result);
  });
});
app.post("/Delete", (req, res) => {
  let id = req.body.id;
  let sql = "DELETE FROM ownerdetails WHERE ownerid='" + id + "'";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else console.log(result);
    res.send(result);
  });
});
app.post("/Busdetails", (req, res) => {
  let sql = "SELECT * FROM tblBus;";
  con.query(sql, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});
app.post("/addbus", (req, res) => {
  let a = req.body.Busno;
  let b = req.body.Category;
  let sql =
    "INSERT INTO tblBus (`category`, `Busno`) VALUES ('"+b+"','"+a+"');";
    con.query(sql, (err, result) => {
      if (err) throw err;
      else console.log(result);
      res.send(result);
    });
});
app.post("/insertconductor",(res,req)=>{
  let a = req.body.conductorid;
  let id=req.body.id
  let sql="UPDATE `tblBus` SET `ConductorID` = '"+a+"' WHERE (`id` = '"+id+"');";
  con.query(sql, (err, result) => {
    if (err) throw err;
    else console.log(result);
    res.send(result);
  });
})
app.listen(4000, () => {
  console.log("server is running");
});

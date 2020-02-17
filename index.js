const express = require ("express");
const path = require ("path");
const app = express ();
app.set ("views",path.join(__dirname, "views"));
app.set("view engine","ejs");
app.listen (3000);
const todos=[
{ id: 1,text:"boh",done:false},
{ id: 6,text:"b5h",done:false},
{ id: 9,text:"b",done:true}
];


app.get("/",function (req, res) { 
  res.render("index", {todos:todos});
} );

app.use(function (req, res) { 
  res.sendFile(path.join(__dirname, "public", "404.html"));
} );

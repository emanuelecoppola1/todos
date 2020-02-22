const express = require ("express");
const path = require ("path");
const sqlite3= require ("sqlite3");
const bodyParser=require("body-parser");

const app = express ();
app.set ("views",path.join(__dirname, "views"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({
extended:true}));
const db= new sqlite3.Database("todos.db",function(){
	app.listen (3000);
})

app.get("/",function (req, res) { 
 const sql="select * from todos;";
 db.all(sql,function(err,rows){
 res.render("index", {todos:rows});
})
 
} );


app.post("/newtodo",function(req,res){
console.log(req.body);
})


app.use(function (req, res) { 
  res.sendFile(path.join(__dirname, "public", "404.html"));
} );

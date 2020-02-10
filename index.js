const express = require ("express");
const app = express ();
app.listen (3000);

app.get("/",function (req, res) { 
  res.send("che vuo tu");
} );
app.get("/er",function (req, res) { 
  res.send("vernazzaro mio zio");
} );
app.use(function (req, res) { 
  res.send("ERRORE");
} );

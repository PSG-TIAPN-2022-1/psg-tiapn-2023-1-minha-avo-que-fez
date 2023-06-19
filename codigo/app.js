const express = require("express")
const app = express()
const port = 3000
const path = require('path');
const router = express.Router();

app.use(express.static("./src"))

app.get('/', function(req,res){  
  res.sendFile(path.join(__dirname+"/src/views/index.html"));
  //res.send("DWAoida")
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})


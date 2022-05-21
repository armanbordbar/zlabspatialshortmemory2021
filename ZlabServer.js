// Create express app
require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');


// VWFA Router
var vwfa_router_path = path.join(__dirname + '/VWFA/vwfa_config.js');
var vwfa_router = require(vwfa_router_path);
/////////////
// MD Router
var MDL2_router_path = path.join(__dirname + '/MD/LEVEL2/MDL2_config.js');
var MDL2_router = require(MDL2_router_path);
console.log(MDL2_router_path)

app.use('/VWFA',vwfa_router);
app.use('/MD/LEVEL2', MDL2_router);
app.use(express.json({ limit: '10mb'}));

const HTTP_PORT = process.env.HTTP_PORT || 3000;
/*
var longUrl = HTTP_PORT;
		
const URLalternate = { longUrl };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(URLalternate)
  };
  const urlChngMess = fetch('/URLredirection', options)
  then(() => {
    const URLChngFdBk = urlChngMess.json();
    if(FinishMessage.status == "Receiving MD Level 2 Experiment Results with Success") {
      EndofTheExp();
    }
    console.log(FinishMessage);
  

  }); 

MDL2_router.use('/', function(req,res,next) {
  console.log(req.url, "@", Date.now());
  next();
})
*/

// Start server
app.listen(HTTP_PORT, err => {
  if (err) {
    return console.log("ERROR", err)
  }
  console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});


// Root endpoint
app.get("/", (req, res) => {
  res.json({"message":"Ok"})
});


// Default response for any other request
app.use(function(req, res){
  res.status(404);
});
const express = require("express");
const path = require('path');
let vwfa_router = express.Router();
vwfa_router.use(express.json({ limit: '10mb'}));
var VWFA_path = path.join(__dirname + '/ExpMain');
vwfa_router.use(express.static(VWFA_path));
db_path = path.join(__dirname + '/vwfa_database.js');
var vwfa_db = require(db_path);
var { PythonShell } = require("python-shell");
vwfa_router.post('/ExpSeq', (request, response) => {
  const MyReq = request.body;
  console.log(MyReq);
  var pythonOptions = {
    mode: 'json',
    scriptPath: __dirname,
    pythonPath: '/usr/bin/python'
}
var pyshell = new PythonShell("/StimSeqGenerator.py", pythonOptions);
var pythonData = new Object();
pyshell.on('message', function (message) {
  pythonData = JSON.stringify(message);
}); 
pyshell.end(function (err) {
  if (err) {
    throw err
  }
  console.log("Stimuli sequence is created");
  response.json(pythonData);
});
})
  
let data = {};
vwfa_router.post('/ExpData', (req, res) => {
  data = req.body;
  res.json({
    "status": "Receiving VWFA Experiment Results with Success",
  });
  InsertData2Table(data);
})
  
  function InsertData2Table(data) {
    console.log(data.TableName);
    console.log(data.ResultsArray[5].StartTrialTime);
    
    let runs = data.ResultsArray.length;
    console.log(runs);
    vwfa_db.serialize(function() {
        vwfa_db.run("begin transaction");
        vwfa_db.run(`drop table if exists ${data.TableName}`);
        vwfa_db.run(`create table ${data.TableName} (StartTrialTime DOUBLE, WhichCond INTEGER, WhichStimuli TEXT, ShouldRespond INTEGER, RespondOrNot INTEGER, Correctness INTEGER, HowFastResponded DOUBLE, EndOfTrialTime DOUBLE)`);
          for (let i = 0; i < runs; i++) {
            vwfa_db.run(`insert into ${data.TableName} values (?, ?, ?, ?, ?, ?, ?, ?)`, data.ResultsArray[i].StartTrialTime, data.ResultsArray[i].WhichCond, data.ResultsArray[i].WhichStimuli, data.ResultsArray[i].ShouldRespond, data.ResultsArray[i].RespondOrNot, data.ResultsArray[i].Correctness, data.ResultsArray[i].HowFastResponded, data.ResultsArray[i].EndOfTrialTime);
              }
              vwfa_db.run("commit");
      });
      vwfa_db.close(function() {
          // sqlite3 has now fully committed the changes
          console.log('Results are in a Table');
      });
   }

vwfa_router.use('/', function(req,res,next) {
  console.log(req.url, "@", Date.now());
  next();
})

vwfa_router.get('/', (req, res) => {
  res.json({"message":"Accessing VWFA Folder Ok"})
})

module.exports = vwfa_router
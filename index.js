var express = require('express')
var app = express()
var xmlparser = require('express-xml-bodyparser')
var processer = require('./server/process')

app.use(xmlparser())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/process', function (req,res) {
  processer.process(req.body)
  res.send('processing')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

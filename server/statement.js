var MongoClient = require('mongodb').MongoClient

exports.parseStatement = function(s) {
 MongoClient.connect('mongodb://localhost:27017/coverme', function(err, db) {
   
   var col = db.collection('statements');
   col.insert(s)
 })
}

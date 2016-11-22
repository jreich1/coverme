var statement = require('./statement')

exports.process = function(obj) {
   statement.save(obj.scoverage.$)
} 

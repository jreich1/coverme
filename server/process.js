var statement = require('./statement')

exports.process = function(xml) {
  xml.statements.statement.forEach(x => statement.parseStatement(x))
} 

var mysql = require('mysql');

function startConnectionSql(host,user,password,database,callback){
  var connection = mysql.createConnection({
    host : host,
    user : user,
    password : password,
    database : database
  });

  connection.connect();
  callback(connection);
}

function querySql(query,result){
  startConnectionSql('localhost','root','','FeedMe',function(connection){

    connection.query(query, function (err, rows, fields) {
      if (err) result(err);
      result(rows);
      connection.end();
    });
  });

}

module.exports = {
  startConnectionSql:startConnectionSql,
  querySql:querySql
};



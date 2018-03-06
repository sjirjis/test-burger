var mysql = require('mysql');
// var connectioninfo = {
// 	host: 'gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// 	username: 'aeebvl78odlutng6',
// 	password: 'ds22p4nnv5qv2rjs'
// }
var connection;
// var connection = mysql.createConnection("mysql://aeebvl78odlutng6:ds22p4nnv5qv2rjs@gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rfwlp5w47f23yfk3");

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
// 	if (err) throw err;

// 	console.log('The solution is: ', rows[0].solution);
// });

// connection.end();
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'LOOPRING',
		database: 'burgers_db'
	});
};


connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
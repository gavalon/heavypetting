var http = require("http");
var mysql = require("mysql");
var io = require("socket.io");


var server = http.createServer(function(request, response){

}).listen(8081);

var io = require("socket.io")(server);

//console.log(server);


var connection = mysql.createConnection({
    host : '104.154.148.252',
    user : 'grant',
    password : 'chickfila',
    database : 'sandsoftime'
});



var eventHandler = function(socket){
	setInterval(function(){
    connection.query("SELECT * FROM deathtable ORDER BY death_time",function(err, reply){
		socket.emit("death_stuff",{animal_data:reply});
	});
	}, 1000)
};
/**
io.on("connection", function(socket){	


	setInterval(function(){

		console.log("Client has successfully connected");
		sql_query = "SELECT * FROM deathtable ORDER BY death_time";
		connection.query(sql_query, function(err, reply){
													console.log(reply);
												});

	}, 1000);

});



**/


io.on("connection", eventHandler);


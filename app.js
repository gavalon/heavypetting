
'use strict';

if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
      ;
    });
  };
}

const express = require('express'),
    exphbs  = require('express-handlebars'), // "express-handlebars"
    Handlebars = require('handlebars')

const app = express();

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

	const videos = [0, 1, 2, 3, 4, 5, 6].map(makeVideoCell)
	const body = makeVideoGrid(videos)
    res.send(makePage(body))
});


app.listen(3000, function () {
    console.log('server listening on: 3000');
});



function makeVideoGrid(videos) {

    const rows = []
    for (var i = 0; i < videos.length/2 - 1; i++) {
        rows.push({'html':'<div class="row">{0}{1}</div>'.format(videos[2*i], videos[2*i+1])})
    }
    if (rows.length % 2 == 1) {
        rows.push({'html':'<div class="row">{0}</div>'.format(videos[videos.length - 1])})
    }

	const source = '<div id="wrap">{{#items}}{{{html}}}{{/items}}</div>'    
    const template = Handlebars.compile(source);
    const context = {'items': rows}
    const result = template(context)
    console.log(result)
    return result
}

function makeVideoCell(url) {
	return '<div class="noclick video"> \
		<iframe width="400" \
			height="300" \
			src="https://www.youtube.com/embed/kfchvCyHmsc?loop=1&rel=0&version=3&autoplay=1&controls=0&showinfo=0&playlist=kfchvCyHmsc" \
			frameborder="0"> \
		</iframe>\
	</div>'
}

const makePage = (body) => '\
	<!DOCTYPE html> \
	<html> \
	<head> \
	  <meta charset="utf-8"> \
	  <title>Example App</title> \
	  <link rel="stylesheet" type="text/css" href="css/style.css" /> \
	</head> \
	  <body> \
        <div id="demo"><h1>Text</h1></div> \
        <script src="http://localhost:8081/socket.io/socket.io.js"></script> \
        <script> \
            function testing(animal_data){  \
                document.getElementById("demo").innerHTML = animal_data[0].id; \
            } \
            var socket = io.connect("localhost:8081"); \
            socket.on("death_stuff", function(death_stuff){ \
                testing(death_stuff.animal_data); \
            }); \
        </script> \
	\
	    {0} \
	\
	  </body>\
	</html>'.format(body)

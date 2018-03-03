var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./controllers/burgers_controller.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('app listening on PORT', PORT)
});
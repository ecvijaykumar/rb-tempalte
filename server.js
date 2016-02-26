var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')   
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// create the Express application
const app = express();
const router = express.Router()

var compiler = webpack(config)  

app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath,  
    stats: {colors: true}  
}))

app.use(webpackHotMiddleware(compiler, {  
    log: console.log 
})) 

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

router.use(function(req, res, next){
    // log each request to the console
    console.log("%s %s %s \n", req.method, req.path, req.url);
    // continue doing what we were doing and go to the route
    next();
});

router.get('/getPopularBooks', function(req, res) {
	res.json({books: [
		{ "title" : "vishnu"},
		{ "title" : "krishna"},
		{ "title" : "Rama"},
		{ "title" : "Keshava"}
	]});

})

router.get(/.*/, function(req, res) {
	res.sendFile(__dirname + "/static/index.html")
})

app.use(express.static(__dirname + "/static"))
app.use(express.static(__dirname + "/public"))

// apply the routes to our application
app.use(router);

app.listen(3000, () => {
	console.log('listening on 3000') 
})  

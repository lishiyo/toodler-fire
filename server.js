var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
 
app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname));
app.listen(process.env.PORT || 3000);

/** OLD
var express = require("express"),
    app = express(),
    bodyParser = require('body-parser')
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = parseInt(process.env.PORT, 10) || 3000;

app.get("/", function (req, res) {
  res.redirect("index.html");
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.listen(port);

**/
var express = require('express'),
  app = express(),
  port = process.env.PORT || 2000,
  db_conn = process.env.DB_CONN || 'mongodb://root:admin0@ds063330.mlab.com:63330/cc-provider',
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

function createServer() {
 	try {
	    mongoose.connect(db_conn, { useNewUrlParser: true, useUnifiedTopology: true });
	    
	    var sm = require('./src/serverMiddleware');
	    
	    app.use(sm.customHeaders);
	    app.use(bodyParser.urlencoded({ extended: true }));
	    app.use(bodyParser.json());
	    
	    var routes = require('./src/routes');
	    routes(app);

	    app.listen(port);

	    console.log('RESTful API server started on: ' + port);
	}
	catch(e){
	    console.log(e);
	}
};

createServer();

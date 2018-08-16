var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    routes = require('./routes/backend'),
    port = process.env.PORT || 3000,
    session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/backend', routes);

// Set up an Express session, which is required for CASAuthentication.
app.use( session({
    secret            : 'super secret key',
    resave            : false,
    saveUninitialized : true
}));

app.listen(port, function(){
    console.log("Server is running on port " + port);
})

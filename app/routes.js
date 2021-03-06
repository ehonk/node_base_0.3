// app/routes.js

// load the todo model

//var Todo = require('./models/todo');  
var Todo = require('../models/todo');
var mLogger = require('../app/mongoLogger');            // load the MongoLogger

// expose the routes to our app with module.exports
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/todos', function (req, res) {

        console.log(" POST /api/todos");

    });

    // create todo and send back all todos after creation
    app.post('/api/todos', function (req, res) {

        console.log(" POST /api/todos");

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {

        console.log(" POST /api/todos");

    });


    app.post('/Ajax_getLogs', mLogger.getCompleteLog);

    // application -------------------------------------------------------------

    // HTML Teil
    /*
    app.get('/to', function (req, res) {       // This will load the single index.html file when we hit localhost:8080
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });*/

    app.get('/overview', function (req, res) { console.log("< Info >  GET /overview"); });
    app.get('/api/todos', function (req, res) { console.log("< Info >  GET /api/todos"); });


    // HTML Single page
    app.get('/single', function (req, res) {       // This will load the single index.html file when we hit localhost:8080
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/single.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

   // JSimple Jade Teil
    app.get('/simplejade', function (req, res) {
        console.log("< Info >  GET /simplejade RENDER");
        res.render('simplejade_index',
            { title: 'Home' }
        )
    })

    // Hydro Jade Teil
    app.get('/hvjade', function (req, res) {
        console.log("< Info >  GET /hvjade RENDER");
        res.render('hvjade_index',
            { title: 'Home' }
        )
    })

    // New Jade Interface
    app.get('/newjade', function (req, res) {
        console.log("< Info >  GET /newjade RENDER");
        res.render('newjade_layout',
            { title: 'Home' }
        )
    })

    // New Jade Interface
    app.get('/bootstrap', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/bootstrap.html'); // load the single view file (angular will handle the page changes on the front-end)
    });  

    // New Jade Interface
    app.get('/testjade', function (req, res) {
        console.log("< Info >  GET /newjade RENDER");
        res.render('testjade',
            { title: 'Home' }
        )
    })

    // New Jade Interface
    app.get('/bs_starter_index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/bs_starter_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // New Jade Interface
    app.get('/bs_theme_index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/bs_theme_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // New Jade Interface
    app.get('/bs_dashboard_index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/bs_dashboard_index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    // New Jade Interface
    app.get('/index', function (req, res) {
        console.log("< Info > GET Slash Call");
        res.sendfile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 


};


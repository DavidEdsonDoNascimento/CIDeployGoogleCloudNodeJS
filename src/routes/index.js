const bodyParser = require('body-parser')
const statusRoute = require('./statusRoute')
const categoriesRoute = require('./categoriesRoute')

const getRoutes = app => {
    
    app.use(
        bodyParser.urlencoded({ extended: true }), 
        bodyParser.json(),
        statusRoute,
        categoriesRoute
    );    
    
};

module.exports = getRoutes;
const bodyParser = require('body-parser')
const statusRoute = require('./statusRoute')
const categoriesRoute = require('./categoriesRoute')
const productsRoute = require('./productsRoute')

module.exports = app => {
    
    app.use(
        bodyParser.urlencoded({ extended: true }), 
        bodyParser.json(),
        statusRoute,
        categoriesRoute,
        productsRoute
    );    
    
};;
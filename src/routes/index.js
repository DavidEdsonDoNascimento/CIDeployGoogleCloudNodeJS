const bodyParser = require('body-parser');

const getRoutes = app => {
    
    app.use(
        bodyParser.urlencoded({ extended: true }), 
        bodyParser.json()
    );

    app.get('/heartbeat', (req, res) => {
        res.status(200).json({
            msg: 'there is heartbeat',
            api: true
        });
    })
    
};

module.exports = getRoutes;
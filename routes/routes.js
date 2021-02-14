// load up our shiny new route for users
const rankRoutes = require('./rank');

const appRouter = (app, fs) => {
    // we've added in a default route here that handles empty routes
    // at the base API url
    app.get('/', (req, res) => {
        res.send('realstack development api-server');
    });

    // run our user route module here to complete the wire up
    rankRoutes(app, fs);
};

module.exports = appRouter;

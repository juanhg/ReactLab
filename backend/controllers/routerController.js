var TVShowCtrl = require('./tvshow');

// API routes

exports.initRouter = function (router) {
    addMainRoute(router);
    addTVShowRoutes(router);
};

addMainRoute = function (router) {
    router.get('/', function (req, res) {
        res.send("Hello World!");
    });
};

addTVShowRoutes = function (router) {
    router.route('/tvshows')
        .get(TVShowCtrl.findAllTVShows)
        .post(TVShowCtrl.addTVShow);

    router.route('/tvshows/fake')
        .get(TVShowCtrl.fakeTVShow);

    router.route('/tvshows/:id')
        .get(TVShowCtrl.findById)
        .put(TVShowCtrl.updateTVShow)
        .delete(TVShowCtrl.deleteTVShow);
}

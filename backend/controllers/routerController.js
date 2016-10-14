var TVShowCtrl = require('./tvshow');
var PersonCtrl = require('./person');


// API routes

exports.initRouter = function (router) {
    addMainRoute(router);
    addTVShowRoutes(router);
    addPersonRoutes(router);
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
};

addPersonRoutes = function (router) {
    router.route('/person')
        .post(PersonCtrl.addPerson);
    router.route('/persons')
        .get(PersonCtrl.findAllPersons);
    router.route('/persons/mocked')
        .get(PersonCtrl.addMockedPerson);
    router.route('/persons/:id')
        .get(PersonCtrl.findById)
        .post(PersonCtrl.deletePerson);
};


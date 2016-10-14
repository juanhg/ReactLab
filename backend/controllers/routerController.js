var TVShowCtrl = require('./tvshow');
var MemberCtrl = require('./member');


// API routes

exports.initRouter = function (router) {
    addMainRoute(router);
    addTVShowRoutes(router);
    addMemberRoutes(router);
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

addMemberRoutes = function (router) {
    router.route('/member')
        .post(MemberCtrl.addMember);
    router.route('/members')
        .get(MemberCtrl.findAllMembers);
    router.route('/members/mocked')
        .get(MemberCtrl.addMockedMember);
    router.route('/members/:id')
        .get(MemberCtrl.findById)
        .post(MemberCtrl.deleteMember);
};


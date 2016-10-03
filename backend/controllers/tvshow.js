require('../models/tvshow');

var mongoose = require('mongoose');
var TVShow = mongoose.model('TVShow');
var handler = require('../utils/responseHandler');

/** private functions **/

exports.removeTVShow = function (response, tvshow) {
    tvshow.remove(function (err) {
        handler.handleResponse(response, tvshow, error)
    });
};

exports.saveTVShow = function (response, tvshow) {
    tvshow.save(function (error, tvshow) {
        handler.handleResponse(response, tvshow, error);
    });
};

//GET - Return all tvshows in the DB
exports.findAllTVShows = function (req, response) {
    console.log('GET /tvshows')
    TVShow.find(function (error, tvshows) {
        handler.handleResponse(response, tvshows, error)
    });
};

//GET - Return a TVShow with specified ID
exports.findById = function (req, response) {
    console.log('GET /tvshow/' + req.params.id);
    TVShow.findById(req.params.id, function (err, tvshow) {
        handler.handleResponse(response, tvshow, error);
    });
};

//POST - Insert a new TVShow in the DB
exports.addTVShow = function (req, response) {
    console.log('POST');
    console.log(req.body);

    var tvshow = new TVShow({
        title: 'req.body.title',
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    });

    exports.saveTVShow(response, tvshow);
};

//POST - Insert a new TVShow in the DB
exports.fakeTVShow = function (req, response) {
    console.log(req.body);

    var me = this;

    var tvshow = new TVShow({
        title: 'First Dates',
        country: 'Spain',
        seasons: 2,
        genre: 'Drama',
        summary: 'This is mainly rubbish'
    });

    var tvshow = new TVShow({
        title: 'Master Chef',
        country: 'Spain',
        seasons: 37,
        summary: 'This is mainly food'
    });

    exports.saveTVShow(response, tvshow);
};


//PUT - Update a register already exists
exports.updateTVShow = function (req, response) {
    TVShow.findById(req.params.id, function (err, tvshow) {
        tvshow.title = req.body.petId;
        tvshow.year = req.body.year;
        tvshow.country = req.body.country;
        tvshow.poster = req.body.poster;
        tvshow.seasons = req.body.seasons;
        tvshow.genre = req.body.genre;
        tvshow.summary = req.body.summary;

        exports.saveTVShow(response, tvshow);
    });
};

//DELETE - Delete a TVShow with specified ID
exports.deleteTVShow = function (req, response) {
    TVShow.findById(req.params.id, function (err, tvshow) {
        exports.removeTVShow(response, tvshow);
    });
};

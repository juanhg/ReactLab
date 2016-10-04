require('../models/person');

var mongoose = require('mongoose');
var Person = mongoose.model('Person');
var handler = require('../utils/responseHandler');

//GET /persons
exports.findAllPersons = function (req, response) {
    console.log('GET persons')

    Person.find(function (error, persons) {
        handler.handleResponse(response, persons, error);
    });
};

//GET - Return a TVShow with specified ID
exports.findById = function (req, response) {
    console.log('GET /persons/' + req.params.id);
    Person.findById(req.params.id, function (error, tvshow) {
        handler.handleResponse(response, tvshow, error);
    });
};

//Get /persons/mocked
exports.AddMockedPerson = function (req, response) {
    console.log('PUT persons/mocked')
    var personMock = new Person({
        name: 'Juan',
        lastName: 'Hernández',
        age: 26,
        gender: 'Male'
    });

    personMock.save(function (error, person) {
        handler.handleResponse(response, person, error);
    });
};

exports.addTVShow = function (req, response) {
    console.log('POST');
    console.log(req.body);

    var person = new Person({
        name: req.body.name,
        lastName: req.body.lastname,
        age: req.body.age,
        gender: req.body.gender,
    });

    person.save(function (error, person) {
        handler.handleResponse(response, person, error);
    });
};


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
exports.addMockedPerson = function (req, response) {
    console.log('PUT persons/mocked')
    var personMock = new Person({
        name: 'Juan',
        age: 26,
        gender: 'Male'
    });

    personMock.save(function (error, person) {
        handler.handleResponse(response, person, error);
    });
};

exports.addPerson = function (req, response) {
    console.log('POST person');
    var member = req.body;

    var person =  new Person({
        name: member['login'],
        age: member['age'],
        gender: member['gender'],
        avatar_url: member['avatar_url']
    });

    person.save(function (error, person) {
        handler.handleResponse(response, person, error);
    });
};

exports.deletePerson = function (req, response) {
    console.log('DELETE person');

    Person.findById(req.params.id, function (error, person) {
        person.remove(function (error) {
            handler.handleResponse(response, person, error)
        });
    });
};


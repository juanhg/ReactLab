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



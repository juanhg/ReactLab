require('../models/member');

var mongoose = require('mongoose');
var Member = mongoose.model('Member');
var handler = require('../utils/responseHandler');

//GET /persons
exports.findAllMembers = function (req, response) {
    console.log('GET members')

    Member.find(function (error, members) {
        handler.handleResponse(response, members, error);
    });
};

exports.findById = function (req, response) {
    console.log('GET /members/' + req.params.id);
    Member.findById(req.params.id, function (error, member) {
        handler.handleResponse(response, member, error);
    });
};

//Get /persons/mocked
exports.addMockedMember = function (req, response) {
    console.log('PUT members/mocked')
    var memberMock = new Member({
        name: 'Juan',
        age: 26,
        gender: 'Male'
    });

    memberMock.save(function (error, member) {
        handler.handleResponse(response, member, error);
    });
};

exports.addMember = function (req, response) {
    console.log('POST member');

    var member =  new Member({
        name: req.body['login'],
        age: req.body['age'],
        gender: req.body['gender'],
        avatar_url: req.body['avatar_url']
    });

    member.save(function (error, member) {
        handler.handleResponse(response, member, error);
    });
};

exports.deleteMember = function (req, response) {
    console.log('DELETE member');

    Member.findById(req.params.id, function (error, member) {
        member.remove(function (error) {
            handler.handleResponse(response, member, error)
        });
    });
};


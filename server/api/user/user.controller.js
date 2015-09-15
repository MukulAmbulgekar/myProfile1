'use strict';

var _ = require('lodash');
var marklogic = require("marklogic");
var conn = require("../../config/db-config.js").connection;

var db = marklogic.createDatabaseClient(conn);
var qb = marklogic.queryBuilder;
var pb = marklogic.patchBuilder;
// Get list of users
exports.index = function(req, res) {
	res.status(200).json({
		message: 'Success'
	})
};

exports.createUser = function(req, res) {
	console.log('Database', db);
	console.log('Req', req.body);
	var uri = "/users/" + req.body.data.username + ".json";
	db.documents.probe(uri)
		.result(function(document) {
			console.log('document', document)
			if (document.exists) {
				return res.status(400).json({
					error: 'username already exists please choose different one'
				})
			}
			db.documents.write({
				uri: "/users/" + req.body.data.username + ".json",
				contentType: "application/json",
				collections: ['users', req.body.data.username],
				content: req.body.data
			}).
			result(function(response) {
				console.dir(JSON.stringify(response))
				return res.status(200).json({
					message: 'Success',
					user: {
						username: req.body.data.username,
						name: req.body.data['first name'].toUpperCase() + ' ' + req.body.data['last name'].toUpperCase()
					}
				})
			}, function(error) {
				return res.status(400).json({
					error: 'Error'
				})
			});
		})
};

exports.login = function(req, res) {
	console.log('Request', req.body);
	var uri = '/users/' + req.body.data.username + '.json';
	db.documents.probe(uri).result(function(document) {
		console.log('response', document);
		if (!document.exists) {
			return res.status(400).send({
				error: "User does not exist"
			})
		}
		db.documents.read(uri).result(function(response) {
			if (response.length > 0) {
				console.log('response', response[0].content.username, response[0].content.password)

				if (response[0].content.username === req.body.data.username && response[0].content.password === req.body.data.password) {
					delete response[0].content['password'];
					delete response[0].content['re-enter password'];
					return res.status(200).send({
						message: "Login Successful",
						user: response[0].content
					})
				} else {
					return res.status(400).send({
						error: "Login Failed- Invalid Credentials"
					})
				}
			}
		})
	})
}

exports.userInfo = function(req, res) {
	console.log('req', req.params.username);
	var uri = '/users/' + req.params.username + '.json';

	db.documents.probe(uri).result(function(document) {
		console.log('response', document)
		if (!document.exists) {
			return res.status(400).send({
				error: 'Document does not exist'
			})
		}
		db.documents.read(uri).result(function(response) {
			console.log('response', response[0].content.length)
			if (response.length > 0) {
				delete response[0].content['password'];
				delete response[0].content['re-enter password'];
				return res.status(200).send({
					//message:'success'
					userInfo: response[0].content
				})
			}
		}, function(error) {
			return res.status(400).send({
				error: 'Error in reading document'
			})
		})
	})
}

exports.updateProfile = function(req, res) {
	console.log('Request', req.body);
	var uri = '/users/' + req.body.data.personalInformation.username + '.json';
	var remove = [];
	var insert = [];
	//remove existing properties
	remove.push(pb.remove('/personalInformation'));
	remove.push(pb.remove('/education'));
	remove.push(pb.remove('/experience'));
	remove.push(pb.remove('/certification'));
	//insert
	insert.push(pb.insert('/email', 'after', {
		personalInformation: req.body.data.personalInformation
	}));
	insert.push(pb.insert('/email', 'after', {
		education: req.body.data.education
	}));
	insert.push(pb.insert('/email', 'after', {
		experience: req.body.data.experience
	}));
		insert.push(pb.insert('/email', 'after', {
		certification: req.body.data.certification
	}));



	db.documents.probe(uri).result(function(document) {
		if (!document.exists) {
			return res.status(400).send({
				error: 'Invalid User'
			})
		}
		db.documents.patch(uri, remove).result(function(response) {
			db.documents.patch(uri, insert).result(function(response) {
				console.log('response-->', response)
				return res.status(200).send({
					message: 'success'
				})
			}, function(error) {
				console.log('error', error);
				return res.status(400).send({
					error: 'error'
				})
			})
		}, function(error) {
			console.log('error', error);
			return res.status(400).send({
				error: 'error'
			})
		})

	})
}
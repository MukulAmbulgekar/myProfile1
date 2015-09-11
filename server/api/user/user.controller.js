'use strict';

var _ = require('lodash');
var marklogic = require("marklogic");
var conn = require("../../config/db-config.js").connection;

var db = marklogic.createDatabaseClient(conn);
// Get list of users
exports.index = function(req, res) {
	res.status(200).json({
		message: 'Success'
	})
};

exports.createUser = function(req, res) {
	console.log('Database', db);
	console.log('Req', req.body);
	var uri = "/" + req.body.data.username + ".json";
	db.documents.probe(uri)
		.result(function(document) {
			console.log('document', document)
			if (document.exists) {
				return res.status(400).json({
					error: 'username already exists please choose different one'
				})
			}
			db.documents.write({
		uri: "/" + req.body.data.username + ".json",
		contentType: "application/json",
		collections: ['users',req.body.data.username],
		content: req.body.data
	}).
	result(function(response) {
		console.dir(JSON.stringify(response))
		return res.status(200).json({
			message: 'Success',
			user:{
				username:req.body.data.username,
				name:req.body.data['first name'].toUpperCase()+ ' '+ req.body.data['last name'].toUpperCase()
			}
		})
	}, function(error) {
		return res.status(400).json({
			error: 'Error'
		})
	});
		})
};
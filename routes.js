var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');


exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'GET', path: '/Chart.js', handler: { file: 'public/Chart.js' }},
	{method: 'GET', path: '/material.js', handler: { file: 'public/material.js' }}
];

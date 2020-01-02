const express = require('express'),
	path = require('path'),
	bodyParser= require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose');
	config = require('./DB');

	const jogadorRoute = require('./routes/jogadorRoute');
	mongoose.Promise = global.Promise;
	mongoose.connect(config.DB, {useNewUrlParser: true}).then(
	 () => {console.log('O banco está conectado!')},
	 err => {console.log('O banco não pode ser conectado' + err)}
	);



	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use('/jogadores',jogadorRoute);
	let port = process.env.PORT || 4000;

	const server = app.listen(function(){
		console.log('Escutando na porta' + port);
	});
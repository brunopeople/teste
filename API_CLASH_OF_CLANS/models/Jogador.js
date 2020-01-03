const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jogador = new Schema({
	TagJogador:{
		type: String
	},

	Clan:{
	  type: String
	},

	Ranking:{
	  type: Number
	}
},{
	collection: 'Jogador'
});

module.exports = mongoose.model('Jogador', Jogador);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Jogadores = new Schema({
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
	collection: 'Jogadores'
});

module.exports = mongoose.model('Jogadores', Jogadores);
const express = require('express');
const app = express();
const jogadorRoutes = express.Router();

let Jogadores = require('../models/Jogadores');

jogadorRoutes.route('/add').post(function(req, res){
	let jogador = new Jogadores(req.body);
	product.save().then(product => {
		res.status(200).json({'Jogadores':'O jogador foi cadastrado com sucesso'});
	}).catch(err => {
		res.status(400).send("Não foi possível salvar o jogador no Banco de Dados");
	});
});

jogadorRoutes.route('/edit/:id').get(function(req,res){
let id = req.params.id;
Jogadores.findById(id, function(err, Jogadores){
	res.json(Jogadores);
	});
});

jogadorRoutes.route('/update/:id').post(function(req,res){
	Jogadores.findById(req.params.id, function(err, jogador){
		if(!jogador)
			res.status.(404).send("Registro não encontrado");
		else {
			jogador.TagJogador = req.body.TagJogador;
			jogador.Clan = req.body.Clan;
			jogador.Ranking = req.body.Ranking;

			jogador.save().then(jogador => {
				res.json('Edição completada!');
			})
			.catch(err => {
				res.status(400).send("nâo foi possível conectar ao banco!");
			});
		}
	});
});

jogadorRoutes.route('/delete/:id').get(function(req, res){
	Jogadores.findByIdAndRemove({_id: req.params.id}, function(err,jogador){
		if(err) res.json(err);
		else res.json('Removido Com Sucesso');
	});
});

module.exports = jogadorRoutes;
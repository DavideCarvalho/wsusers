var mongoose = require('mongoose');
var model = mongoose.model('User');
const api = {};

api.lista = function (req, res) {
  model
    .find()
    .then(
    users => res.json(users),
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};

api.buscaPorId = function (req, res) {
  model
    .findOne({ id: req.params.id })
    .then(
    user => {
      if (!user) throw new Error('Foto não encontrada');
      res.json(user);
    },
    error => {
      console.log(error);
      res.sendStatus(500);
    });

};

api.adiciona = function (req, res) {
  model.create(req.body)
    .then(
    user => res.json(user),
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};

api.atualiza = function (req, res) {
  console.log(req.body);
  model
    .findOneAndUpdate({ id: req.params.id }, req.body, { new: "true" })
    .then(
    user => res.json(user),
    error => {
      console.log(error);
      res.sendStatus(500);
    });
};

module.exports = api;

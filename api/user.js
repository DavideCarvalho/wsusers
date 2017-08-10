var mongoose = require('mongoose');
var model = mongoose.model('User');
const api = {};

api.lista = async function (req, res) {
  try {
    const user = await model.find();
    res.status(200).json(users)
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
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

module.exports = (app) => {
  app.route('/users')
    .get(app.api.user.lista)
    .post(app.api.user.adiciona);

  app.route('/users/:id')
    .get(app.api.user.buscaPorId)
    .put(app.api.user.atualiza)
};

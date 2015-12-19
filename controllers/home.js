module.exports = {
  registerRoutes: function(app) {
    app.get('/', this.home);
    app.get('/test', this.test);
  },

  home: function(req, res) {
    var context = {buildSrc: './build/ReactApp.js'};
    res.render('home', context);
  },

  test: function (req, res, next) {
    res.render('home', { title: 'Testeando', texto: 'olaf2' });
  },

};
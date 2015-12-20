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
    var context = {
      buildSrc: './build/test.js',
      title: 'Testeando',
      texto: 'olaf2'
    };
    console.log('context:');
    console.log(context);
    res.render('home', context);
  },

};
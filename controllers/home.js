var JSX = require('node-jsx').install();
var React = require('react');
ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = {
  registerRoutes: function(app) {
    app.get('/', this.home);
    app.get('/test', this.test);
  },

  home: function(req, res) {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('home', {reactOutput: reactHtml});
  },

  test: function (req, res, next) {
    res.render('home', { title: 'Testeando', texto: 'olaf2' });
  },

};
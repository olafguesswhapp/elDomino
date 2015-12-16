var JSX = require('node-jsx').install();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = {
  registerRoutes: function(app) {
    app.get('/', this.home);
    app.get('/test', this.test);
  },

  home: function(req, res) {
    var reactHtml = ReactDOMServer.renderToString(ReactApp({}));
    console.log('check reactHtml');
    console.log(reactHtml);
    res.render('home', {reactOutput: reactHtml});
  },

  test: function (req, res, next) {
    res.render('home', { title: 'Testeando', texto: 'olaf2' });
  },

};
module.exports = {
    registerRoutes: function(app) {
        app.get('/', this.home);
        app.get('/test', this.test);
    },

    home: function(req, res) {
        res.render('home', { title: 'Express', texto: 'olaf' });
    },

    test: function (req, res, next) {
    	res.render('home', { title: 'Testeando', texto: 'olaf2' });
    },

};
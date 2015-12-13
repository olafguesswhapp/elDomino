
var homeController = require('../controllers/home.js');

module.exports = function(app) {
	homeController.registerRoutes(app); // main Controller
};

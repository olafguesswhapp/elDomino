var homeController = require('../controllers/home.js');
var userController = require('../controllers/gameUsers.js');

module.exports = function(app) {
	homeController.registerRoutes(app); // main Controller
	userController.registerRoutes(app); // user Controller
};

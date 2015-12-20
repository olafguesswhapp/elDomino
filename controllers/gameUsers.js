var gameUsers = require('../models/gameusers.js');
var moment = require('moment');

module.exports = {
  registerRoutes: function(app) {
    app.get('/users', this.userList);
    app.get('/register', this.createUser);
    app.post('/register', this.processCreateUser);
  },

  userList: function(req, res) {
    gameUsers.find(function(err,gameusers){
      console.log('found all these users:');
      console.log(gameusers);
      var context = {
        users: gameusers.map(function(gameuser){
          return {
            userEmail: gameuser.userEmail,
            firstName: gameuser.firstName,
            lastName: gameuser.lastName,
            created: gameuser.created
          }
        })
      };
      console.log('context:');
      console.log(context);
      res.render('home', context);
    });
    
  },

  createUser: function (req, res, next) {
    var context = {buildSrc: './build/CreateUserApp.js'};
    res.render('home', context);
  },

  processCreateUser: function(req, res ,next){
    console.log('received the following content from form:');
    console.log(req.body);

    var newUser = new gameUsers ({
      userEmail: req.body.userEmail,
      firstName: req.body.firstName,
      password: '123',
      lastName: req.body.lastName,
      created: moment(new Date()).format('YYYY-MM-DDTHH:mm'),
    });
    newUser.save(function(err, newUser){
      if(err) {
        console.log('Der Username "' + '" muss einmalig sein.');
        console.log(err);
        res.redirect(303, '/');
      } else {
        res.redirect(303, '/users');
      }
    });

    var context = {
      title: req.body.useremail,
      texto: req.body.firstName + ' ' + req.body.lastName
    };
    res.render('home', context);
  },

  test: function(){
    
  },

};
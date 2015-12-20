var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

var gameUsersSchema = new Schema({
	userEmail: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	firstName: String,
	lastName: String,
	created: Date
});

// make sure username (email) is unique
gameUsersSchema.plugin(uniqueValidator, { message: 
	'Diese Email-Adresse (Email = Username) wird bereits von einem anderen User verwendet.' });

// Bcrypt middleware
gameUsersSchema.pre('save', function(next, done) {
	var user = this; 
	if(!user.isModified('password')) return next(); // Bcrypt middleware
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);
			user.password = hash;
			next();
		});
	});
});

// Password verification
gameUsersSchema.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return cb(err);
		cb(null, isMatch);
	});
};

var GameUsers = mongoose.model('GameUsers', gameUsersSchema, 'gameUsers');
module.exports = GameUsers;
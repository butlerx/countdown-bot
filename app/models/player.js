var _ = require('underscore'),
    Cards = require('../controllers/cards');

var Player = function Player(nick, user, hostname) {
    var self = this;
    self.id = _.uniqueId('card');
    self.nick = nick;
    self.user = user;
    self.hostname = hostname;
    self.hasPlayed = false;
    self.isPicker false;
    self.isActive = true;
    self.idleCount = 0;
    self.points = 0;
    self.inactiveRounds = 0;
};

/**
 * Expose `Player()`
 */
exports = module.exports = Player;

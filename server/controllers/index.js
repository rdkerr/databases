var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('CONTROLLER/GET/MESSAGES\n');
      models.messages.get(req, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('CONTROLLER/POST/MESSAGES\n');
      models.messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('CONTROLLER/GET/USERS\n');
      models.users.get(req, res);
    },
    post: function (req, res) {
      console.log('CONTROLLER/POST/USERS\n');
      models.users.post(req, res);
    }
  },

  rooms: {
    // Ditto as above
    get: function (req, res) {
      console.log('CONTROLLER/GET/rooms\n');
      models.rooms.get(req, res);
    },
    post: function (req, res) {
      console.log('CONTROLLER/POST/rooms\n');
      models.rooms.post(req, res);
    }
  }
};


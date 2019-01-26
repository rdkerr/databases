var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('CONTROLLER/MESSAGES\n');
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
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
  }
};


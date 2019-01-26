var db = require('../db');

module.exports = {
  messages: {
    get: function (request, response) {
      console.log('MODEL\n');
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('MODEL/USERS/GET');
      db.connect();
      var sql = 'SELECT * FROM users';
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('Result: ' + JSON.stringify(result));
        res.send(JSON.stringify(result));
      });
      db.end();
    },

    post: function (req, res) {
      console.log('MODEL/USERS/POST');
      var name = req.body.name;
      db.connect();
      var sql = 'INSERT INTO users(name) VALUES(\'' + name + '\');';
      console.log(sql);
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('Result: ' + JSON.stringify(result));
        res.send(name);
      });
      db.end();
    }
  }
};


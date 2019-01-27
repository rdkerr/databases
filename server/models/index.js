var db = require('../db');
var mysql = require('mysql');

var connect = function() {
  db = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('MODEL/MESSAGES/GET\n');
      connect();
      db.connect();
      var sql = 'SELECT m.message, m.created_at, m.id, u.name as username, r.name as roomname FROM messages AS m INNER JOIN users AS u ON u.id=m.user_id INNER JOIN rooms as r ON r.id=m.room_id ORDER BY created_at DESC';
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
      console.log('MODEL/MESSAGES/POST\n');
      connect();
      db.connect();
      var sql = `INSERT INTO messages(message,room_id,user_id) VALUES('${req.body.message}',(SELECT id FROM rooms WHERE name='${req.body.roomname}'), (SELECT id FROM users WHERE name='${req.body.username}'));`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('Result: ' + JSON.stringify(result));
        res.send(req.body.message);
      });
      db.end();
    }
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      console.log('MODEL/USERS/GET');
      connect();
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
      connect();
      db.connect();
      //console.log(req.body.username);
      var sql = `INSERT INTO users(name) VALUES('${req.body.username}');`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('Result: ' + JSON.stringify(result));
        res.send(req.body.username);
      });
      db.end();
    }
  },

  rooms: {
    // Ditto as above.
    get: function (req, res) {
      console.log('MODEL/rooms/GET');
      connect();
      db.connect();
      var sql = 'SELECT * FROM rooms';
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
      console.log('MODEL/rooms/POST');
      connect();
      db.connect();
      console.log(req.body.roomname);
      var sql = `INSERT INTO rooms(name) VALUES('${req.body.roomname}');`;
      db.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          throw err;
        }
        console.log('Result: ' + JSON.stringify(result));
        res.send(req.body.roomname);
      });
      db.end();
    }
  }
};


var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // query db
      dbConnect = db.dbConnection;
      // dbConnect.connect();
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        var queryString = 'SELECT * FROM users';
        
        callback(results);
        // });

      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      // add row(s) to relevant dbs
      dbConnect = db.dbConnection;
      // dbConnect.connect();
      console.log(body);
      var queryString = `INSERT INTO messages (userID, message, roomID) VALUES ((SELECT userID from users WHERE username = '${body.username}'), '${body.message}', (SELECT roomID from rooms WHERE roomname = '${body.roomname}'));`;
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        console.log(queryString);
        callback();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      // query db
      dbConnect = db.dbConnection;
      // dbConnect.connect();
      var queryString = 'SELECT * FROM users';
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        console.log(results);
        // dbConnect.end();
        callback(results);
      });
    },
    post: function (body, callback) {
      dbConnect = db.dbConnection;
      // dbConnect.connect();
      var queryString = `INSERT INTO users (username) VALUES ('${body.username}');`;
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        // dbConnect.end();
        callback();
      });
    }
  }
};


var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // query db
      dbConnect = db.dbConnection;
      dbConnect.connect();
      var queryString = 'SELECT * FROM messages';
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        var queryString = 'SELECT * FROM users';
        // dbConnect.query(queryString, queryArgs, function(err, results) {
          
        // });

      });
    }, // a function which produces all the messages
    post: function () {
      // add row(s) to relevant dbs
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
        // dbConnect.query(queryString, queryArgs, function(err, results) {
          
        // });

      });
    },
    post: function (body, callback) {
      dbConnect = db.dbConnection;
      dbConnect.connect();
      console.log('made it into model.post')
      console.log(body.username)
      var queryString = `INSERT INTO users (username) VALUES ('${body.username}');`;
      var queryArgs = [];
      dbConnect.query(queryString, queryArgs, function(err, results) {
        // var queryString = 'SELECT * FROM users';
        console.log(err);
        console.log(queryString);
        // dbConnect.end();
      
        callback();

        // dbConnect.query(queryString, queryArgs, function(err, results) {
          
        // });
      

      });
    }
  }
};


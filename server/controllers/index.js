var models = require('../models');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data) {
        var statusCode = 200;
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify(data));
      })
    
      // on get request
      // call models.get to read everything from the server
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.on('data', (data) => {
        models.messages.post(data);
      console.log(req);
      //write
      }) // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
        models.users.get(function(data) {
        var statusCode = 200;
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify(data));
      })
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body, function(data) {
        var statusCode = 201;
        res.writeHead(statusCode, headers);
        res.end();
      })
    }
  }
};


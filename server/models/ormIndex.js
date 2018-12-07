// var db = require('../db');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student');

var users = db.define('users', {
  username: Sequelize.STRING
});

var rooms = db.define('rooms', {
  roomname: Sequelize.STRING
});

var messages = db.define('messages', {  
  userID: Sequelize.INTEGER,
  message: Sequelize.STRING,
  roomID: Sequelize.INTEGER
});

messages.belongsTo(users, {foreignKey: 'userID'})
messages.belongsTo(rooms, {foreignKey: 'roomID'})

module.exports = {
  messages: {
    get: function(callback) {
        messages.findAll({
            include: [
                {
                    model: users
                },
                {
                    model: rooms
                }
            ]
        })
            .then(function(messages) {
                var resObj = messages.map(function(message) {
                    return Object.assign(
                        {},
                        {
                            username: message.user.dataValues.username,
                            message: message.message,
                            roomname: message.room.dataValues.roomname
                        }
                    )
                });
                callback(resObj);
            })
       }, // a function which produces all the messages
    post: function (body, callback) {
      // add row(s) to relevant dbs
        var userid = 0;
        users.findOne({where: {username: body.username}})
        .then(function(user) {
            if(!user) {
                return users.create({username: body.username});
            } else {
                return user;
            }
        })
        .then(function(user) {
            userid = user.id;
           return rooms.findOne({where: {roomname: body.roomname}})
        })
        .then(function(room){
            if(!room) {
                return rooms.create({roomname: body.roomname});
            } else {
                return room;
            }
        })
        .then(function(room) {
           return messages.create({userID:userid, message: body.message, roomID:room.id});
        })
        .then(function(message){
            callback(body);
        })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
        users.findAll()
            .then(function(users) {
                callback(users);
            })
       },
    post: function (body, callback) {
      // add row(s) to relevant dbs
        users.findOne({where: {username: body.username}})
        .then(function(user) {
            if(!user) {
                return users.create({username: body.username});
            } else {
                return user;
            }
        })
        .then(function(user) {
            callback(body);
        })
    }
  }
};
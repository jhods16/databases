DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  roomID INTEGER NOT NULL AUTO_INCREMENT,
  roomname TEXT NOT NULL,
  PRIMARY KEY (roomID)
);

CREATE TABLE users (
  userID INTEGER NOT NULL AUTO_INCREMENT,
  username TEXT NOT NULL,
  PRIMARY KEY (userID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INTEGER NOT NULL AUTO_INCREMENT,
  userID INTEGER,
  message TEXT NOT NULL,
  roomID INTEGER,
  PRIMARY KEY (messageID),
  FOREIGN KEY (roomID) REFERENCES rooms(roomID),
  FOREIGN KEY (userID) REFERENCES users(userID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


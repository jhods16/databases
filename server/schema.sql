DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id INTEGER NOT NULL AUTO_INCREMENT,
  roomname varchar(255) NOT NULL,
  createdAt varchar(255),
  updatedAt varchar(255),
  PRIMARY KEY (id),
  UNIQUE (roomname)
);

CREATE TABLE users (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL,
  createdAt varchar(255),
  updatedAt varchar(255),
  PRIMARY KEY (id),
  UNIQUE (username)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  userID INTEGER,
  message varchar(255) NOT NULL,
  roomID INTEGER,
  createdAt varchar(255),
  updatedAt varchar(255),
  PRIMARY KEY (id),
  FOREIGN KEY (roomID) REFERENCES rooms(id),
  FOREIGN KEY (userID) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


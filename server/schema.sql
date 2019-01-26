CREATE DATABASE chat;

USE chat;

create table messages(id int primary key auto_increment not null, created_at timestamp, message varchar(200), room_id int, user_id int);

create table users(id int primary key auto_increment not null, name varchar(25));

create table rooms(id int primary key auto_increment not null, name varchar(25));

create table friends(id int primary key auto_increment not null, friend_id int);

alter table friends add foreign key (friend_id) references users(id);

alter table messages add foreign key (user_id) references users(id);

alter table messages add foreign key (room_id) references rooms(id);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


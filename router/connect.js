const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "472561212",
    port: 3306,
    database: 'SC'
});

connection.connect((error) => {
    if (!error) {
        console.log(error);
    } else {
        console.log('Connected!');
    }
});

connection.query(`use SC`);
/*
connection.query(`
create table Student(
Sno int auto_increment primary key not null,
Sname varchar(20),
Ssex char(2) check (Ssex in('男','女')),
Sage int
)`);


connection.query(`
create table Course(
Cno int auto_increment primary key not null,
Cname varchar(20),
Crequired int(11)
)`);

connection.query(`
create table School(
SCno int auto_increment primary key not null,
SCname varchar(50),
SCtype int,
Cno int,
foreign key (Cno) references Course(Cno)
)`);

connection.query(`
create table SC(
Sno int,
Cno int,
SCno int,
primary key(Sno,Cno,SCno),
foreign key (Sno) references Student(Sno),
foreign key (Cno) references Course(Cno),
foreign key (SCno) references School(SCno)
)`);
*/

module.exports = connection;
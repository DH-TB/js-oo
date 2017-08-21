const connection = require('/connect');
const $sql = require('./sqlMapping');

const Student = require('../public/src/student');

module.exports = {
    add: (req, res, next)=> {
        let student = new Student(req.body);
        connection.query($sql.studentSql.insert, [student.studentName, student.studentSex, student.studentAge], (err, result)=> {
            if (err) {
                return next(err);
            }
            console.log(result);
        })
    },
    findAllCourse: (req, res, next)=> {
        connection.query($sql.studentSql.queryAll, (err, result)=> {
            if (err) {
                return next(err);
            }
            console.log(result);
        })
    },
};
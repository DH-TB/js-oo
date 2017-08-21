const connection = require('/connect');
const School = require('../public/src/school');
const $sql = require('./sqlMapping');

module.exports = {
    add: (req, res, next)=> {
        let schoolInfo = req.body;
        connection.query($sql.schoolSql.insert, schoolInfo, (err, result)=> {
                if (err) {
                    return next(err);
                }
                console.log(result);
            }
        )
    },
    findAll: (req, res, next)=> {
        connection.query($sql.schoolSql.queryAll, (err, result)=> {
                if (err) {
                    return next(err);
                }
                console.log(result);
            }
        )
    },
    findAllCourse: (req, res, next)=> {
        let Sname = req.params.Sname;
        connection.query($sql.schoolSql.queryAllCourse, Sname, (err, result)=> {
                if (err) {
                    return next(err);
                }
                console.log(result);
                /*根据学校名找到对应课程ID*/
                let Cno = result.Cno;

                /*根据课程ID查找所有的课程信息*/
                connection.query($sql.courseSql.queryOne, Cno, (err, result)=> {
                    if (err) {
                        return next(err);
                    }
                    console.log(result);
                })
            }
        )
    }
};

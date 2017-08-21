const connection = require('/connect');
const ChooseCourse = require('../public/src/chooseCourse');
const $sql = require('./sqlMapping');

module.exports = {
    add: (req,res,next)=> {
        let chooseCourse = req.body;
        connection.query($sql.chooseCourseSql.insert,chooseCourse,(err,result)=>{
            console.log(result);
        })
    }
};
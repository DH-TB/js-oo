const express = require('express');
const router = express.Router();

const student = require('./Dao/student');
const school = require('./Dao/school');
const course = require('./Dao/course');
const chooseCourse = require('./Dao/chooseCourse');

router.post('/addStudent', (req, res, next)=> {
    student.add(req, res, next);
});
router.get('/queryAllChooseCourse', (req, res, next)=> {
    student.findAllCourse(req, res, next);
});


router.get('/getAllSchool', (req, res,next)=> {
    school.findAll(req, res, next);
});
router.get('/addSchool', (req, res,next)=> {
    school.add(req, res, next);
});
router.get('/queryCourse/:Sname',(req, res,next)=>{
    school.findAllCourse(req, res,next);
});



router.post('/chooseCourse',(req,res,next)=>{
   chooseCourse.add(req,res,next);
});

module.exports = router;
let request = require('./../request');

class Course {
    constructor(courseId,courseName, courseType) {
        this._courseId = courseId;
        this._courseName = courseName;
        this._courseType = courseType;
    }

    get courseId() {
        return this._courseId;
    }

    get courseName() {
        return this._courseName;
    }

    get courseType() {
        return this._courseType;
    }

    addCourse(){
        let url = '/addCourse';
        let data = {"Cname":'chinese',"Crequired":'bixiu'};
        request.post(url,data)
    }
    deleteCourse(){

    }
}

module.exports = Course;
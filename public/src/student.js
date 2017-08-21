const request = require('./../request');

class Student {
    constructor(studentId, studentName, studentSex,studentAge) {
        this._studentId = studentId;
        this._studentName = studentName;
        this._studentSex = studentSex;
        this._studentAge = studentAge;
    }
    get studentName() {
        return this._studentName;
    }
    get studentSex() {
        return this._studentSex;
    }
    get studentAge() {
        return this._studentAge;
    }


    addStudent(data){
        let url = '/addStudent';
        request.post(url,data);
    }
    queryAllChooseCourse() {
        let url = '/queryAllChooseCourse';
        request.get(url);
    }

}

module.exports = Student;
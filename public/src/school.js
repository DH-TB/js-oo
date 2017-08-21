let request = require('../request');

class School {
    constructor(schoolId, schoolName, schoolType) {
        this._schoolId = schoolId;
        this._schoolName = schoolName;
        this._schoolType = schoolType;
    }
    schoolId() {
        return this._schoolId;
    }
    schoolName() {
        return this._schoolName;
    }
    schoolType() {
        return this._schoolType;
    }

    querySchool(){
        let url = '/getAllSchool';
        request.get(url);
    }
    addSchool(){
        let url = '/addSchool';
        /*添加学校的课程*/
        let data = {"SCname":'xianyoudian',"SCtype":'bixiu'};
        request.post(url,data);
    }
    /*根据学校名得到所有课课程*/
    queryCourse(Sname){
        let url = `/queryCourse/${Sname}`;
        request.get(url);
    }
}

module.exports = School;
const studentSql = {
    insert: 'INSERT INTO Student(Sno,Sname,Ssex,Sage) VALUES(?,?,?,?)',
    queryAll: 'select * from SC',
};

const courseSql = {
    queryOne: 'select * from Course where Cno=?',
};

const chooseCourseSql = {
    insert: 'INSERT INTO SC(Sno,Cno) VALUES(?,?)'
};

const schoolSql = {
    insert:'INSERT INTO School(SCname,SCtype) VALUES(?,?)',    /*不完整*/
    queryAll: 'select * from School',
    queryAllCourse: 'select * from School where Sname=?',

};

let a = {
    update: 'update userInfo set username=?,name=?,age=?,sex=?,phone=?,email=?,remark=? where id=?',
    delete: 'delete from userInfo where id=?',
};

module.exports = {
    studentSql,
    courseSql,
    schoolSql,
    chooseCourseSql
};
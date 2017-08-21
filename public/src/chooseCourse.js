class ChooseCourse{
    constructor(Sno,Cno){
        this._Sno = Sno;
        this._Cno = Cno;
    }
    get Sno() {
        return this._Sno;
    }
    get Cno() {
        return this._Cno;
    }

    chooseCourse(data){
        let url = '/chooseCourse';
        let data = {"Sno":1,"Cno":1};
        request.post(url,data)
    }
}
var University = /** @class */ (function () {
    function University(name, department) {
        this.name = name;
        this.department = department;
    }
    University.prototype.gradution = function (year) {
        console.log("Gradution " + this.department + " " + year + " students");
    };
    return University;
}());
var mum = new University('MUM', 'Computer Science');
mum.gradution(2019);

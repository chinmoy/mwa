class University{
    constructor(public name:string,public department:string){}
    gradution(year:number){
        console.log(`Gradution ${this.department} ${year} students`);
    }
}
const mum = new University('MUM', 'Computer Science');
mum.gradution(2019);

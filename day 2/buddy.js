
Array.prototype.even=function(){
    let arr=[];
    arr=(this.filter(x=>x%2==0));
    setTimeout(function() {
        console.log(arr);
      }, 0)
    
}

Array.prototype.odd=function(){
    let arr=[];
    arr=(this.filter(x=>x%2!=0));
    setTimeout(function() {
        console.log(arr);
      }, 0)
    
}


console.log("Start");
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log("End");
function f1(){
var array=[1,2,3,4,5]
let lg=array[1]
for(let i=1;i<=4;i++){
    if(lg<array[i]){
        lg=swap(lg,array[i])
    }
    
}
console.log(lg+" is largest");
function swap(a,b){
    let c
    c=a
    a=b
    b=c
    return a
}
}
f1()
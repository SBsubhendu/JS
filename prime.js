let result=""

for(let num=10;num<=100;num++){
    let count=1

for(let i=2;i<=num;i++){
    if(num%i==0){
        count++
    }
}
if(count ==2){
    result+=`${num}`
}//else{
//     console.log(`${num}`);
    
// }

}
console.log(result.trim());


//2 types of data type

//1 -- primitive 
//7 available--String,Symbol,Number,Boolean,undefined,null,BigInt

let id=Symbol(12)
let Number=Symbol(12)

console.log(id===Number);

//2--Non-primitive 
// array,object,function

//string
const name=new String("subha");//object
console.log(name);
console.log(name.length);
console.log(name.charAt(2));
console.log(name.indexOf('a'));
console.log(`my name is ${name}`);

const newname=name.substring(0,2);
console.log(newname);

const divname=name.slice("").reverse();
console.log(divname);









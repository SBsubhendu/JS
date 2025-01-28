// let num=110
// console.log(typeof num);
// console.log(num.toString().length);//first convert string then find length
// console.log(num.toFixed(1));//110.0 
// console.log(num.toFixed(2));//110.00

// let value=159.326
// console.log(value.toPrecision(3));//return string and give precision value 159
// value=159.536
// console.log(value.toPrecision(3));//160
// value=159.556
// console.log(value.toPrecision(4));//159.6



// let balance=new Number(5000)
// console.log(balance.length);


//Binary to decimal

function bin_to_dec(bin){
    return parseInt((bin+ '').replace(/[^01]/gi,''),2);
}
console.log(bin_to_dec('110011'));


let binaryString = '1101'; // Binary representation of 13
console.log(parseInt(binaryString, 26)); // Outputs: 13

/*
let bin = 1100; // A number
console.log(bin + ''); // Outputs: '1100' (now it's a string)
2. .replace(/[^01]/gi, '')
What it does: Removes all characters from the string that are not 0 or 1.
How it works:
/[^01]/ is a regular expression that matches anything that is not 0 or 1.
g (global flag): Ensures the operation affects all matches in the string, not just the first.
i (case-insensitive flag): Not strictly necessary in this context since 0 and 1 are case-insensitive, but included for completeness.
replace(..., ''): Replaces all non-binary characters with an empty string, effectively removing them.
*/
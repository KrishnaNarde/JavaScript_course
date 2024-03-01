// dayatype conversions//

let score="300n"

// lets know what is its type

console.log(typeof score); //
console.log(typeof (score)); // written as method

// conversion of string into number
let valueinNumber=Number(score)
console.log(typeof valueinNumber);
console.log(valueinNumber);


// notes
// "33"==> 33 
//"33abc"==>NaN
// true=>1;false=>0

// lets convert stirng to boolian
let isLoggedIn="keisha"
let booleanisloggedin=Boolean(isLoggedIn)
console.log(booleanisloggedin);
  // if ""--> false
  //if "keis"-->true
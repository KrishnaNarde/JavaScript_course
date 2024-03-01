// data types in javascript 

// declaration of constant variable
const accountId =14453 // it cant be change

let accountEmail="krishna@gmail.com"
var accPassword="12345"
accountcity="pune"
let accountstate;


/// LET vs VAR ?? what it is exactly
/* {
    let-->> used in modern javascript

    VAR-->prefered not to used VAR--> beacuse some issues in block scope and functional scope
}
*/

 //accountId=2--> not allowed due to const keyword
 console.log(accountId)
 console.log(accPassword);
 

 // simple method ---> console.table=== used for geting all variables value at a time

 console.table([accountId,accountEmail,accPassword,accountcity,accountstate])


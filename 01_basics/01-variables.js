const accountId = 12343493 // not changable
let accountEmail= "agarwal@gmail.com" 
var accountPassword  = "123478308"
accountCity = "Jaipur"
// ==========================================================
// prefer to not to use var
// bcz of issue in block scope and functional scope
accountEmail= "sdfdfwal@gmal.com" 
accountPassword  = "12343478308"
accountCity = "Bengaluru"
//accountId =2 // not allowed bcz it is const
console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity])

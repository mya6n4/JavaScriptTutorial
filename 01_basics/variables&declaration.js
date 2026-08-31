/*
words vs keywords
js me ese words jinse kuch ho sakta h vo sare words js ke keywords h
key words is special words which has some meaning
like function, else, for , 
palak is not a keywords
*/

/*1===========================var let const=============================*/

/* var is a part of es 5
and let const is part of es6 new version
 */

/*

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

*/


/*2-===================declarations and initialization =====================*/
/*
var a; // declare karna
var a= 13; // declare and initialize karna also same with let
// varwindow me add karta h 
// alaways function scope hoata h ye function ke andar use hota h 
//aap firse declare kar sakte ho same name se or error bhi nhi ayega 

var a = 1234;
var a = 92;// bcz it will create the error in future for the same value have multiple value 
//so for the prevention we will use the let
const discount = 12; // we can't change the value
let dulha = "lab";
let dulhan = "labby";// we can change the value in let cASE

*/
// var is function scope it will work inside the function and add in the window 
// let is block scope 

//3- =====================ScriptProcessorNode(globalThis, BLOCK , FUNCTIONAL)==================================

/*FUNCTIONAL SCOPE :- functional scope means only inside the function like 
function abcd (){
    var a = 234;

}
global scope:-  not inside any bracket {} like
var a= 23;

block scope:- inside the {} me hoga var use block scope bolte
but jab var likhenge iske andar to var pure code me use hoga q ki var function scope hota h but let iski puri respect karta let block scope hota 
*/

// 4:- ===================REASSIGNMENT,REDECALATION =======================
/*
reassignment means wapis se value dena 
redeclare means dubara se let var ke sath likhna 
var a= 23;
a = 33;//reassign karna jab value dusari di jaye
// redeclare posible in var but not in let 

var a = 235; // we can redeclare

let b = 23;
b = 32; // we can do reassign the value  in let 

let b = 343; // we can't not redeclare the let bcz b has already declared 
*/

//5:- ================================TEMPORTAL DEAD ZONE============================
/*utna area jisme js ko pata to h ki variable exist to karta h vo apko value nhi de sakta
like variable banne ke uppar jitna space we will call the temportal dead zone 
var me temporal dead zone nhi hota
ye kewal let or const ke sath banta only */

//6:- ======================HOISTING IMPACT PER TYPE==========================
/*
HOISTING :- EK variable ko jab js mein banate hai to vo variable
 do hisso mein toot jata hai and uska declare part upar chala jata hai 
 and uska initialization part neeche reh jata h
like :-
var a = 12;
ese tootega like ->

var a = undefined;// sabse uppar chala jayega
a = 12;
ab yadi hum ese likhte to 
console.log(a);
var a = 23;
so the output will be undefined bcz ye tuta hoga

teeno hi hoist hote h 
like var -> hoist -> undefine error ata
 let -> hoist -> ReferenceError  ata
 const -> hoist ->ReferenceError ata
 */
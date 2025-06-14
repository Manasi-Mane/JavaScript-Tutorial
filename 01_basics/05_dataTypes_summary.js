//Primitive data types
// 7 categories : Strings, Number, Boolean, null(empty), undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id =  Symbol('123')
const anotherId = Symbol('123')
// console.log(id==anotherId);

const bigNumber = 7276215587267356487898767677878n
// console.log(typeof bigNumber);

//Referenced (Non Primitive)
// Arrays, Objects, Functions

const heros = ["Shaktiman" , "naagraj", "doga"]
let myObj = {
     name:"manasi",
     age:22,
}

const myFunction = function(){
    console.log("Hello World");   
}

// console.log(typeof myObj);  // function object


//---------------------------------------------------------

//Stack memory- primitive, Heap Memory-non primitive

let myYoutubename="manasimane.com"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="manasi@google.com"

console.log(userOne.email);
console.log(userTwo.email);


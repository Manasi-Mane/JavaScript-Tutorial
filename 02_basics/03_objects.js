//singleton

//objects literals
// Object.create()

const mySym = Symbol("Key1")

const JsUser = {
    name:"Manasi",
    "full name" : "Manasi Mane",
    [mySym] : "myKey1",
    age : 19,
    location : "Pune",
    email : "manasi@google.com",
    isLoggedIn : false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email) //mostly dot is used
// console.log(JsUser["email"])
// console.log(JsUser["full name"]) //but in some cases dot cannot be used so use []
// console.log(JsUser[mySym])

JsUser.email="manasi@chatgpt.com"
// Object.freeze(JsUser)
//after freez no change is made in object
JsUser.email = "manasi@microsoft.com" 
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

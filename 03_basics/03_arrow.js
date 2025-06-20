const user = {
    username : "Manasi",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);   
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Manasi"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "Manasi"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Manasi"
    console.log(this);
}
// chai()

// function one(){
//     console.log(this);    
// }
// one()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }

//implicit return
// const addTwo = (num1, num2) =>  num1+num2

// const addTwo = (num1, num2) =>  (num1+num2)

const addTwo = (num1, num2) =>  ({username : "Manasi"})

console.log(addTwo(3,4))

// const myArray = [2, 5, 6, 7, 8]
// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())
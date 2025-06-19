

function sayMyName(){
    console.log("Hello Manasi");
    }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2
    // return result
    return number1+number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Manasi"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, v1l2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username : "manasi",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`); 
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 399
});

const myNewArray = [200, 400, 100, 600]

function retrunSecondValue(getArray){
    return getArray[1]
}
console.log(retrunSecondValue(myNewArray));
console.log(retrunSecondValue([100, 2000, 3000]));

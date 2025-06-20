// var c= 300
let a= 300
if(true){
    let a = 10
    const b =20
    // console.log("Inner : ",a);
    
}

// console.log(a);
// console.log(b);

function one(){
    const username = "Manasi"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username = "Manasi"
    if(username === "Manasi"){
        const website = " youtube"
        // console.log(username + website);
   }
//    console.log(website);
   
}
// console.log(username);

//+++++++++++++++++++ Interesting ++++++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5) //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return  num+2
}


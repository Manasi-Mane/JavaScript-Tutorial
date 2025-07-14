const user = {
    username: "Manasi",
    logincount: 8,
    signedIn: true,

    getUserDeatils(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }
}


// console.log(user.username);
// console.log(user.getUserDeatils());
// console.log(this)

function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this
}

const user1 =new User("Manasi", 12, true)
const user2 =new User("ChaiAurCode", 11, false)

console.log(user1.constructor);
// console.log(user2);

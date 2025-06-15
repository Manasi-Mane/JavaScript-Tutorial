const name="Manasi"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new  String("manasi-mane-com")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(-1,4)
console.log(newString);

const newStringOne = "   manasi     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://manasi.com/manasi%20mane"

console.log(url.replace('%20','-'));

console.log(url.includes('manasi'))



const anotherString = gameName.slice(-1,-4)
console.log(anotherString);

console.log(gameName.split('-'));

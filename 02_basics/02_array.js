const marvel_heroes =  ["thor", "Ironman", "Spiderman"]
const dc_heroes =["superman", "flash", "batman"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]//spread operator
// console.log(all_new_heroes);

const another_array=[1,2,3,[4,5,7],7,[6,7,[4,5]]]
const real__another_array = another_array.flat(Infinity)
console.log(real__another_array);

console.log(Array.isArray("Manasi"))
console.log(Array.from({name : "Manasi"})) //interesting

let score1=  100
let score2=  200
let score3=  300
console.log(Array.of(score1,score2,score3));

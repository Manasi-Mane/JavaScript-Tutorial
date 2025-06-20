//Immediately invoked Function Expression (IIFE) //avoids global scope pollution
// ()()

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) =>  {
    console.log(`DB CONNECTED TWO ${name}`);
} )("Manasi")
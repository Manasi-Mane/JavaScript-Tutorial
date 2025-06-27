# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jfdohcrg?file=1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript
 console.log("Manasi")
 const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id

  })
})
```

## project 2 solution

```javascript

const form = document.querySelector("form")
//this usecase will give you empty value
// const height = parseInt(document.querySelector("#height").value)

form.addEventListener("submit", function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if(height === '' || height<0 || isNaN(height)){
    result.innerHTML=`Please give a valid height ${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    result.innerHTML=`Please give a valid weight ${weight}`
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    let text;
    if(bmi<18.6){
       text = "Under Weight"
    }
    else if(bmi<=24.9){
       text = "Normal Range"
    }
    else{
       text = "Overweight"
    }
    result.innerHTML = `<span>${bmi}</span> --> ${text}`
  }

})
```

## project 3 solution

```javascript

const clock = document.querySelector("#clock")



setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleString())  
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)

````

## project 4 solution
```javascript

let randomNumber = (parseInt(Math.random()*100+1))
const submit = document.querySelector("#subt")
let userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p=document.createElement("p")

let prevGuess=[]
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }else if(guess<1 || guess>100){
    alert("Please enter a number more than 1 and less than 100")
  }else{
    prevGuess.push(guess)
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess==randomNumber){
    displayMessage("You guessed it right")
    endGame()
  }else if(guess<randomNumber){
    displayMessage("Number is too low")
  }else{
    displayMessage("Number is too high")
  }
}

function displayGuess(guess){
  userInput.value = ''
  numGuess++;
  guessSlot.innerHTML += `${guess}, `
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute("disabled", "")
  p.classList.add("button")
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}

function newGame(){
  const newGameButton = document.querySelector("#newGame")
  newGameButton.addEventListener("click", function(e){
    randomNumber = (parseInt(Math.random()*100+1))
    prevGuess = []
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML =  `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    displayMessage('')
    playGame=true
  })
}
```

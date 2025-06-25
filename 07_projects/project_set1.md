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
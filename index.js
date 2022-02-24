var randomNumber1 = Math.floor(Math.random()*6) + 1
var randomImageLink1 = "dice" + randomNumber1 +".png"
var randomImageSource1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageLink1)

var randomNumber2 = Math.floor(Math.random()*6) + 1
var randomImageLink2 = "dice" + randomNumber2 +".png"
var randomImageSource2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageLink2)

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Xuxumint Win"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Bibimint Win"
} else {
    document.querySelector("h1").innerText = "Two player Draw"
}

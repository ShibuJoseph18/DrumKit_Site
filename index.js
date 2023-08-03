// var test = document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

// var test = document.querySelector("button").addEventListener("click",handleClick);

var noOfDrums = document.querySelectorAll(".drum").length;
var clickMe = 0;
while(clickMe < noOfDrums){
    var test = document.querySelectorAll(".drum")[clickMe].addEventListener("click",function() {
        var buttonHmtl = this.innerHTML;
        makeSound(buttonHmtl);
        buttonAnimation(buttonHmtl);
    });
    clickMe++;
}//// mousetouch



document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});/////keyboard key press

function makeSound(key) {
    var a;
    switch(key) {
        case "w":
            a = new Audio("sounds/tom-1.mp3");
            a.play()
            break;
        case "a":
            a = new Audio("sounds/tom-1.mp3");
            a.play()
            break;
        case "s":
            a = new Audio("sounds/snare.mp3");
            a.play()
            break;
        case "d":
            a = new Audio("sounds/tom-3.mp3");
            a.play()
            break;
        case "j":
            a = new Audio("sounds/tom-4.mp3");
            a.play()
            break;
        case "k":
            a = new Audio("sounds/kick-bass.mp3");
            a.play()
            break;
        case "l":
            a= new Audio("sounds/crash.mp3");
            a.play()
            break;
        default:
            console.log();
    }
}

function buttonAnimation(Element) {
    var currentElement = document.querySelector("." + Element).classList.add("pressed");

    setTimeout(function() {
        var currentElement = document.querySelector("." + Element).classList.remove("pressed");
    },100);
    
}
    

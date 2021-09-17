/*
function handleClick(){
    alert("I got clicked")
}

// event listener that will happen when first button is clicked
// addEventListener("event",function)
document.querySelector("button").addEventListener("click",handleClick);
*/

// Another way of writing this(ANONYMOUS FUNCTION)
/*
document.querySelector("button").addEventListener("click", function(){
    alert("2nd way fo writing function with eventListener");
})
*/

// Give all buttons with class "drum" an event
// querySelectorAll() returns an array 

/* 
// FOR FUN: Make text turn white and back to red with each click
var ww = document.querySelector(".w");

ww.addEventListener("click", function(){
    ww.classList.toggle("white");
})
*/ 

// Both eventListeners can return the "key" that was clicked or pressed!

// On Click eventListeners

var allBtn = document.querySelectorAll(".drum");

for(var i = 0; i < (allBtn.length);i++){
    // MOUSE EVENT
    allBtn[i].addEventListener("click", function(){
        // the function() in this case is a "callback" function which can return 
        // can return certain properties depending on the event
        // makeSound(event.target.innerHTML);
        // OR
        // this. is the object and innerHTML returns its attribute, which
        // is the HTML content of whatever was clicked(within allBtn array)
        // "this" returns the whole line of HTML
         makeSound(this.innerHTML);
         buttonAnimation(this.innerHTML);
        
        
    })
}

// key pressed eventListeners
// uses the whole document
// the function() in this case is a "callback" function which can return 
// can return certain properties depending on the event
// KEYBOARD EVENT
document.addEventListener("keydown",function(event){
    // event is an object with a property of key(returns the key pressed)
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Functions 

function makeSound(key){
    switch(key){
        case "w":
            // make Audio() object to play sounds
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":    
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":    
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(this.innerHTML + " triggered the default case!") 
    }
}
function buttonAnimation(key){
    var activeButton = document.querySelector("."+key);
    // .classList.add() will add a class but with .classList.toggle() we
    // can "add and remove" the class by performing the same "event" again.
    activeButton.classList.add("pressed");
    // we can also add a setTimeout function, will perform a specified 
    // function() after a specified amount of time!!
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
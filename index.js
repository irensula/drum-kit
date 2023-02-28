//Detecting Press
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for(var i = 0; i<numberOfDrumButtons; i++){
	
	document.querySelectorAll('.drum')[i].addEventListener('click', function(){
		
		var buttonInnerHTML = this.innerHTML;
		
		makeSound(buttonInnerHTML);

		buttonAnimation(buttonInnerHTML);
	});
}
//detecting keyboard press
document.addEventListener('keydown', function(event){
	makeSound(event.key);
	buttonAnimation(event.key);
});

function makeSound(key){
	switch(key){
		case 'w':
			var tom1 = new Audio('sounds/tom-1.mp3');
			tom1.play();
			break;
		case 'a':
			var tom2 = new Audio('sounds/tom-2.mp3');
			tom2.play();
			break;
		case 's':
			var tom3 = new Audio('sounds/tom-3.mp3');
			tom3.play();
			break;
		case 'd':
			var tom4 = new Audio('sounds/tom-4.mp3');
			tom4.play();
			break;
		case 'j':
			var snare = new Audio('sounds/snare.mp3');
			snare.play();
			break;
		case 'k':
			var crash = new Audio('sounds/crash.mp3');
			crash.play();
			break;
		case 'l':
			var kickBass = new Audio('sounds/kick-bass.mp3');
			kickBass.play();
			break;

		default:console.log(buttonInnerHTML);
		}
}
function buttonAnimation(currentKey){
	var activeButton = document.querySelector('.' + currentKey);
	
	activeButton.classList.add('pressed');

	setTimeout(function(){
		activeButton.classList.remove('pressed');
	}, 100);
}
//keydown

/*

//High level function
function add(num1, num2){
	return num1 + num2;
}
function multiply(num1, num2){
	return num1 * num2;
}
function subtract(num1, num2){
	return num1 - num2;
}
function divide(num1, num2){
	return num1 / num2;
}
function calculator(num1, num2, operator){
	return operator(num1, num2);
}
//Audio
	var audio = new Audio('sounds/tom-1.mp3');
	audio.play();
*/
//
/*
var houseKeeper1 = {
	yearsOfExperience: 12,
	name: 'Jane',
	cleaningRepertoire: ['bathroom', 'lobby', 'bedrooms'],
	clean: function(){
		alert('Cleaning in progress');
	}
}
//houseKeeper1.clean();

//Constructor function
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire){
	this.yearsOfExperience = yearsOfExperience;
	this.name = name;
	this.cleaningRepertoire = cleaningRepertoire;
	this.clean = function(){
		alert('Cleaning in progress');
	}
}

var houseKeeper1 = new HouseKeeper(12, 'Tom', ['lobby', 'bedrooms']);
*/

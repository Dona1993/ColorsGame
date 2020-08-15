var numberOfSquares = 6;
var colors = generateRandomColor(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for(var i = 0; i <modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");

		// if(this.textContent === "Easy"){
		// 	numberOfsquares = 3;
		// } else{
		// 	numberOfsquares = 6;
		// }

		this.textContent === "Easy"? numberOfSquares = 3: numberOfSquares = 6;
		reset();
		//figure out how many squares to show
		//pick new color
		//pick a new pickedColor
		//update page to reflect these changes
	});
}

function reset(){

	//generate all new colors
	colors = generateRandomColor(numberOfSquares);
//pick a new random color from array
	pickedColor = pickColor();
//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"// we use 'this' because we are inside the eventlistener for reset button, to which we are referring to
	messageDisplay.textContent = "";//to get rid of 'correct' when we play again

//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display ="none";
		}
		
	}
	h1.style.backgroundColor = "steelblue"; 
}


// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColor(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor; 
// 	for (var i=0; i < squares.length; i++){
// 		if(colors[i]){ 
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColor(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i < squares.length; i++){
		 
// 			squares[i].style.background = colors[i];
// 			squares[i].style.background = "block";	
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
// //generate all new colors
// 	colors = generateRandomColor(numberOfSquares);
// //pick a new random color from array
// 	pickedColor = pickColor();
// //change color display to match picked color
// 	colorDisplay.textContent = pickedColor;
// 	this.textContent = "New Colors"// we use 'this' because we are inside the eventlistener for reset button, to which we are referring to
// 	messageDisplay.textContent = "";//to get rid of 'correct' when we play again

// //change colors of asquares
// 	for(var i = 0; i<squares.length; i++){
// 		squares[i].style.background = colors[i];
// 	}
// 	h1.style.backgroundColor = "steelblue"; 
});

colorDisplay.textContent = pickedColor;

for (var i=0; i< squares.length; i++){

	//add colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;

		//compare the clicked color to the picked one
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			//change the text of reset button to be play again
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	});
}

function changeColors(color){
	//loop through all squares 
	//change each color to  match the given color
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;//color or pickedColor works
	}
}

/*To create random numbers:
Math.random(); : This fn gives decimal random nos. between 0 n 1. Doesnt include 1
eg, to generate a number between 1 and 6, 
Math.random()*6
this gives decimal nos. between 0 and 5. so, add 1
MAth.random()*6+1;
now, to chop off the decimal part, use,
Math.floor(MAth.random() * 6 + 1);*/

//Note: For arrays, we dont have to add 1 bcs array index starts with 0

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0; i<num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random()*256); //255 + 1
	//pick a green from 0 - 255
	var g = Math.floor(Math.random()*256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random()*256);
	// return "rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


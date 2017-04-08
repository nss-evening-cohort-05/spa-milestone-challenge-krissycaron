//////////  The final IIFE should augment the object with two more functions. 
// One function resets the border thickness and background color for each car element back to the original values. 
// The other function changes the thickness of the border of a car element, and changes its background color. 
// The function must accept two arguments.

///////////////// Increase Border //////////////////////////
// When you click on one of the car elements, 
// change the width of the border to a higher value, 
// and change the background color to any other color of your choosing.
////////////////////////////////////////////////////////////

var CarLot = (function(oldCarLot){
	var editDesc = "";
	var selectedCar;
	var textBoxNav = document.getElementById("userInputBox");


	oldCarLot.changeCards =  function(event){
		
		console.log("inside change cards");
	}

return oldCarLot;

})(CarLot || {});





// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` 
// that you need for the application. Name the function `activateEvents`.
var CarLot = (function (oldCarLot) {

///////////////// Increase Border //////////////////////////
// When you click on one of the car elements, 
// change the width of the border to a higher value, 
// and change the background color to any other color of your choosing.
////////////////////////////////////////////////////////////
oldCarLot.activateEvents = function(){

	var listOfCars = document.getElementsByClassName("carInventoryCard");
	for (var k=0; k<listOfCars.length; k++){
		listOfCars.addEventListener("click", increaseBorder);
			function increaseBorder(){
			document.getElementsByClassName("carInventoryCard").style.border = "3";

			}
	 
		}

	}
	console.log(listOfCars);
	
// console.log(activateEvents);
return oldCarLot;

})(CarLot || {});

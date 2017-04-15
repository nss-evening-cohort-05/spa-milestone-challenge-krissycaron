// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` 
// that you need for the application. Name the function `activateEvents`.
var CarLot = (function (oldCarLot) {
	var textBoxNav = document.getElementById("userInputBox");

// console.log("inside event handler IIFE", oldCarLot.activateEvents);

	oldCarLot.activateEvents = function(){
		document.body.addEventListener("click", CarLot.changeCards);
		console.log(oldCarLot.replaceText);
		}


return oldCarLot;

})(CarLot || {});











// var listOfCars = document.getElementsByClassName("thumbnail");
// 	for (var k=0; k<listOfCars.length; k++){
// 		listOfCars.addEventListener("click", increaseBorder);
// 			function increaseBorder(){
// 			document.getElementsByClassName("carInventoryCard").style.border = "3";

// 			}
	 
// 		}

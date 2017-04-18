// The second IIFE should augment the original one with a function that creates all of the `eventHandlers` 
// that you need for the application. Name the function `activateEvents`.
var CarLot = (function (oldCarLot) {
	var textBoxNav = document.getElementById("userInputBox");

	oldCarLot.activateEvents = function(){
		document.body.addEventListener("click", CarLot.changeCards);
		}


return oldCarLot;

})(CarLot || {});

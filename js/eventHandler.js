var	CarLot = (function(oldCarLot)){
	oldCarLot.activateEvents = function(){
		for (var i=0; i<carCardClass.length; i++){
			carCardClass[i].addEventListener("click", oldCarLot);
		};
	};
	oldCarLot.inputElements = function(){
		textBoxNav.focus();
		textBoxNav.value = "";
		textBoxNav.addEventListener("keyup", oldCarLot);
	}

	return oldCarLot;
})(CarLot || {});
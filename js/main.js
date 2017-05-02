var CarLot = (function(oldCarLot){
	var selectedCar;
	var textBoxNav = document.getElementById("userInputBox");


	oldCarLot.changeCards =  function(event){
		var clickedCard = document.getElementsByClassName("carInventoryCard");
		console.log("clickedCard", clickedCard);
		textBoxNav.value="";
		for (var k=0; k<clickedCard.length; k++){
		console.log("clickedCard", clickedCard);
			clickedCard[k].classList.remove("selected");

		}
		if (event.target.classList.contains("carInventoryCard")){
			selectedCar = event.target.childNodes[1].childNodes[4];
			event.target.classList.add("selected");
		} 
		else if (event.target.classList.contains("grandchild")){
			selectedCar = event.target.parentNode.parentNode.childNodes[1].childNodes[4];
			event.target.parentNode.parentNode.classList.add("selected");
		} else if (event.target.classList.contains("child")){
			selectedCar = event.target.parentNode.childNodes[1].childNodes[4];
			event.target.parentNode.classList.add("selected");
		}else {
			console.log("not working!");
		}
		textBoxNav.focus(); 
		};

		oldCarLot.replaceText = function(event){
				textBoxNav.keypress = function(){
					if(window.event.keyCode === 13){
						textBoxNav.value="";
					} else {
						selectedCar.innerHTML = textBoxNav.value;
					};
				};
			}
		textBoxNav.addEventListener("keypress", function (event) {
			var	editBio=selectedCar
				editBio.innerHTML= "";
			var mimickText=textBoxNav.value;
			editBio.innerHTML += mimickText;
			textBoxNav.value=== "";
});
		oldCarLot.clearText = function(){
		}


return oldCarLot;

})(CarLot || {});

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
		var clickedCard = document.getElementsByClassName("thumbnails");
		var carInventory = oldCarLot.loadInventory;
		for (var k=0; k<clickedCard.length; k++);
			clickedCard[k].classList.remove("selected");
			if (event.target.classList.contains("description")){
				textBoxNav.focus();
				selectedCar = event.target;
				event.target.parentNode.parentNode.classList.add("selected");
				console.log(event);
			} else if (event.target.classList.contains("grandChild")){
				textBoxNav.focus();
				selectedCar = event.target.parentNode.childNodes[3];
				event.target.parentNode.parentNode.classList.add("selected");
			} else if (event.target.classList.contains("child")){
				textBoxNav.focus();
				selectedCar = event.target.childNodes[3];
				event.target.parentNode.classList.add("selected");
			};
			textBoxNav.value = selectedCar.innerHTML;
		},
		
		// console.log(event);
		oldCarLot.replaceText = function(event){
				textBoxNav.onKeyPress = function(){
					if(window.event.keyCode === 13){
						textBoxNav.value="";
					} else {
						selectedCar.innerHTML = textBoxNav.value;
					};
				};
			}

return oldCarLot;

})(CarLot || {});




// 	function selectedFamousPerson(e) {
// 		var peopleCards = document.getElementsByClassName("person");
// 	  for (var i = 0; i < famousPeople.length; i++) {
// 	  	peopleCards[i].classList.remove("selected")
// 	  }
// // 	if (e.target.classList.contains("person")) {
//   		e.target.classList.add("selected");
//   		selectedBio = e.target.childNodes[3].childNodes[1];
// 	} else if (e.target.classList.contains("child")) {
// 		e.target.parentNode.classList.add("selected");
// 		selectedBio = e.target.parentNode.childNodes[3].childNodes[1];
// 	} else if (e.target.classList.contains("grandChild")) {
// 		e.target.parentNode.parentNode.classList.add("selected");
// 		selectedBio = e.target.parentNode.parentNode.childNodes[3].childNodes[1];
// 	} 
// 	// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// 	inputTextFromDOM.focus();
// }





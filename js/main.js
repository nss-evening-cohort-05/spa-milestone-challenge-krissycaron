var CarLot = (function(oldCarLot) {
	oldCarLot.selected = function(){
		var selected = event
	}
})(CarLot || {});








// function from WYSIWYG
// function selectedFamousPerson(e) {
// 	var peopleCards = document.getElementsByClassName("person");
//   for (var i = 0; i < famousPeople.length; i++) {
//   	peopleCards[i].classList.remove("selected")
//   }
// 	if (e.target.classList.contains("person")) {
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

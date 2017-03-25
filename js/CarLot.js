console.log("test");
var CarLot = (function () {
	var carContainerDiv = document.getElementById("carContainer");
	// var carArray = [];

	function makeCarArray(xhrData){
		var carString = "";
		var currentCar; 
		for (var i=0; i<xhrData.length; i++) {
			currentCar = xhrData.inventory[i];

		  currentCar += `<div class="col-sm-6 col-md-4">`;
		  currentCar += `<div class="thumbnail">`;
		  currentCar += `<img src="${currentCar.url}">`;
		  currentCar += `<div class="caption">`;
		  currentCar += `<h3>${currentCar.name}</h3>`;
		  currentCar += `<p>Is a ${currentCar.type}</p>`;
		  currentCar += `<p>Likes to eat: ${currentCar.food}</p>`;
		  currentCar += `</div></div></div>`

		}
		carContainerDiv.innerHTML = 
	}
	

	function getData(){
		var carsData = JSON.parse(this.responseText);
		makeCarArray(xhrData);
	}
	function fileFailed(){
		alert("Inventory did Not Load, Sorry Please Try Again!");
	}
	

	var carRequest = new XMLHttpRequest();
	carRequest.addEventListener("load", getData);
	carRequest.addEventListener("error", fileFailed);
	carRequest.open("GET","inventory.json");
	carRequest.send();

	oldCarLot.getData = function(){

	return carsArray;
	}

	return CarLot;
});(CarLot || {});


console.log("first cars",  CarLot);

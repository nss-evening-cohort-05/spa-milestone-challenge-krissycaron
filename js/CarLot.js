console.log("test");
var CarLot = (function () {
	var carContainerDiv = document.getElementById("carContainer");
	// var carArray = [];

	function makeCarArray(xhrData){
		var carString = "";
		var currentCar; 
		for (var i=0; i<xhrData.length; i++) {
			currentCar = xhrData.inventory[i];

		  carString  += `<div class="col-sm-6 col-md-4">`;
		  carString  += `<div class="thumbnail">`;
		  carString  += `<img src="${xhrData.currentCar[i].url}">`;
		  carString  += `<div class="caption">`;
		  carString  += `<h3>${xhrData.currentCar[i].make}</h3>`;
		  carString  += `<h6>${xhrData.currentCar[i].model}</h6>`;
		  carString  += `<p>Year: ${xhrData.currentCar[i].year}</p>`;
		  carString  += `<p>Price: ${xhrData.currentCar[i].price}</p>`;
		  carString  += `<p>Description: ${xhrData.currentCar[i].description}</p>`;
		  carString  += `</div></div></div>`

		}
		carContainerDiv.innerHTML = ca
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

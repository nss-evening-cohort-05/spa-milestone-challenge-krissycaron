console.log("trying to get things to print");

var carContainerDiv = document.getElementById("carContainer");
var carCardClass = document.getElementsByClassName("thumbnail");
var textBoxNav = document.getElementById("userInputBox");
var carDescription = document.getElementsByTagName("p");

function printToDom(xhrData){
	var carString = "";
	for (var i=0; i<xhrData.length; i++) {
		if (i%3 === 0){
			carString +=`<div> class="row">`
		}
		// currentCar = xhrData.inventory[i];

	  carString  += `<div class="col-sm-6 col-md-4" id="carInventoryCard">`;
	  carString  += `<div class="thumbnail">`;
	  carString  += `<img src="${xhrData.currentCar[i].url}">`;
	  carString  += `<div class="caption">`;
	  carString  += `<h3>${xhrData.currentCar[i].make}</h3>`;
	  carString  += `<h6>${xhrData.currentCar[i].model}</h6>`;
	  carString  += `<p>Year: ${xhrData.currentCar[i].year}</p>`;
	  carString  += `<p>Price: ${xhrData.currentCar[i].price}</p>`;
	  carString  += `<p>Description: ${xhrData.currentCar[i].description}</p>`;
	  carString  += `</div></div></div>`;
	  if (1%3 ===2){
	  	carString+=`</div>`;
	  }

	}
	carContainerDiv.innerHTML = carString;
}



CarLot.loadInventory();
console.log(printToDom);

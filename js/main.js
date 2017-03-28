
var carContainerDiv = document.getElementById("carContainer");
		// var carCard = document.getElementById("carInventoryCard")
	var CarLot = (function(oldCarLot){
		oldCarLot.printToDom = function(xhrData){
			var carString = "";
			var currentCar; 
			for (var i=0; i<xhrData.length; i++) {
				currentCar = xhrData.inventory[i];

			  carString  += `<div class="col-sm-6 col-md-4" id="carInventoryCard">`;
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
			carContainerDiv.innerHTML = carString;
		console.log(printToDom);

		return oldCarLot;
		};

})(CarLot || {});

console.log("write to dom", CarLot);
// console.log("write to dom", oldCarLot);

	


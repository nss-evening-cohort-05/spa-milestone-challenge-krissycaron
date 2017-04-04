console.log("trying to get things to print");

var carContainerDiv = document.getElementById("carContainer");
var carCardClass = document.getElementsByClassName("thumbnail");
var textBoxNav = document.getElementById("userInputBox");
var carDescription = document.getElementsByTagName("p");
var carString = "";
var submitBtn = document.getElementById("submitBtn");



function carInfo(xhrData){
	for (var i=0; i<xhrData.length; i++) {
		carString +=`<div class="row">`
		// console.log(xhrData[i]);

	  carString  += `<div class="col-sm-6 col-md-4 carInventoryCard">`;
	  carString  += `<div class="thumbnail">`;
	  carString  += `<img src="${xhrData[i].url}">`;
	  carString  += `<div class="caption">`;
	  carString  += `<h3>${xhrData[i].make}</h3>`;
	  carString  += `<h6>${xhrData[i].model}</h6>`;
	  carString  += `<p>Year: ${xhrData[i].year}</p>`;
	  carString  += `<p>Price: ${xhrData[i].price}</p>`;
	  carString  += `<p>Description: ${xhrData[i].description}</p>`;
	  carString  += `</div></div></div></div>`;
	  }
	carContainerDiv.innerHTML = carString;
	CarLot.activateEvents();
};

// submitBtn.addEventListener("click", carInfo);


// CarLot.loadInventory(inventory);
CarLot.loadInventory();

console.log("what's happening here", carInfo);




var carContainerDiv = document.getElementById("carContainer");
var carCardClass = document.getElementsByClassName("thumbnail");
var carDescription = document.getElementsByTagName("p");
var carString = "";
var submitBtn = document.getElementById("submitBtn");



function carInfo(xhrData){
	for (var i=0; i<xhrData.length; i++) {
		if(i%3===0){
		carString +=`<div class="row">`
		}

	  carString  += `<div class="col-sm-6 col-md-4 carInventoryCard">`;
	  carString  += `<div class="thumbnail child">`;
	  carString  += `<img src="${xhrData[i].url}" class="grandchild">`;
	  carString += `</div>`
	  carString  += `<div class="caption" class="child">`;
	  carString  += `<h3 class="grandchild">${xhrData[i].make}</h3>`;
	  carString  += `<h6 class="grandchild">${xhrData[i].model}</h6>`;
	  carString  += `<p class="grandchild">Year: ${xhrData[i].year}</p>`;
	  carString  += `<p class="grandchild">Price: ${xhrData[i].price}</p>`;
	  carString  += `<p class="description grandchild" id="description">Description: ${xhrData[i].description}</p>`;
	  carString  += `</div></div>`;
		  if(i%3===2){
		  	carString +=`</div>`;
		  }
	  }
	carContainerDiv.innerHTML = carString;
	

	CarLot.activateEvents();
};

submitBtn.addEventListener("click", carInfo);

CarLot.loadInventory(carInfo);

// console.log("what's happening here", carInfo);




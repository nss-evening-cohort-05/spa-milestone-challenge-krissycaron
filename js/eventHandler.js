console.log("trying to get things to print");

var carContainerDiv = document.getElementById("carContainer");
var carCardClass = document.getElementsByClassName("thumbnail");
var textBoxNav = document.getElementById("userInputBox");
var carDescription = document.getElementsByTagName("p");
var carString = "";
var submitBtn = document.getElementById("submitBtn");
var inventoryCars = [];
var createCars = new XMLHttpRequest();
var carArray = [];


function carInfo(xhrData){
	for (var i=0; carArray.length; i++) {
			carString +=`<div> class="row">`
		}
		// currentCar = xhrData.inventory[i];

	  carString  += `<div class="col-sm-6 col-md-4" id="carInventoryCard">`;
	  carString  += `<div class="thumbnail">`;
	  // carString  += `<img src="${xhrData.currentCar[i].url}">`;
	  carString  += `<div class="caption">`;
	  carString  += `<h3>${carArray.currentCar[i].make}</h3>`;
	  carString  += `<h6>${carArray.currentCar[i].model}</h6>`;
	  carString  += `<p>Year: ${carArray.currentCar[i].year}</p>`;
	  carString  += `<p>Price: ${carArray.currentCar[i].price}</p>`;
	  carString  += `<p>Description: ${carArray.currentCar[i].description}</p>`;
	  carString  += `</div></div></div>`;
	  }
	carContainerDiv.innerHTML = carString;

submitBtn.addEventListener("click", carInfo);


// CarLot.loadInventory(inventory);
window.addEventListener("loadInventory", CarLot.loadInventory);

// console.log("what's happeneing here", printToDom);


function CarLot() {
	createCars.addEventListener("load", getData);
    createCars.addEventListener("error", fileFailed);
    createCars.open("GET", "inventory.json");
    createCars.send();
};

function getData() {
    var carData = JSON.parse(this.responseText).cars;
    carInfo();
    console.log("xhrData returned", getData)
}

function pullData(){
	inventoryCars = xhrData.inventory;	
		for(var i=0; i<carArray.length; i++){
			//// if its on the left it what you want it to print or add on the right is where you are getting it from.
			console.log(carArray);
				
			}
		}
	}
	printToDom(); 
}

console.log("CarLot");


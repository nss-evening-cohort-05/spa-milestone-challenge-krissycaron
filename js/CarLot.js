
var CarLot = (function (oldCarLot) {
	
  var carArray = [
	  {
	    make: "",
	    model: "",
	    year: "",
	    price: "",
	    description: ""
	  } 
	];


	 function getData (){
		var inventoryCars = JSON.parse(this.responseText);
		carArray = inventoryCars.inventory;
		for (var i=0; i<inventoryCars.length; i++);{
			oldCarLot.makeCarArray(carArray[i].inventory);
		} 
		return carArray;
	}
	
	function fileFailed(){
		alert("Inventory did Not Load, Sorry Please Try Again!");
	}
	

	var carRequest = new XMLHttpRequest();
	carRequest.addEventListener("load", getData);
	carRequest.addEventListener("error", fileFailed);
	carRequest.open("GET","inventory.json");
	carRequest.send();

		oldCarLot.getXhr = function(){
		return carsArray;
		}
	return oldCarLot;


})(CarLot || {});


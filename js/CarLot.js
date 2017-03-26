
var CarLot = (function (oldCarLot) {

	var inventoryCars = [];	
  
	return {
		loadInventoryCars: function (callBack){
			var carRequest = new XMLHttpRequest();
			carRequest.addEventListener("load", getData);
			carRequest.addEventListener("error", fileFailed);
			carRequest.open("GET","inventory.json");
			carRequest.send();

		}
	}
	function getData (){
		var jcars = JSON.parse(this.responseText);
		inventoryCars = jcars.inventory;
		for (var i=0; i<jcars.length; i++);{
			oldCarLot.makeCarArray(inventoryCars[i].inventory);
		} 
		return inventoryCars;
	}
	
	function fileFailed(){
		alert("Inventory did Not Load, Sorry Please Try Again!");
	}
	
		oldCarLot.getData = function(){
		return inventoryCars;
		}
	return oldCarLot;

})(CarLot || {});

console.log("first carlot", CarLot);


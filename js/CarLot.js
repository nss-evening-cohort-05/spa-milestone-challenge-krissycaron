//Create one global variable (e.g. CarLot) 
// and use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function (oldCarLot) {
  
  // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file
  //and stores the inventory in a private variable.
  function getData (){
    var carData = JSON.parse(this.responseText).cars;
    // console.log(carData);
    carInfo(carData);
  };

  function fileFailed() {
      alert("Error loading page, Please open dev tools");
  };

  return {
      
      loadInventory :  function (){
      var inventoryCars = [];
      var createCars = new XMLHttpRequest(); 
        createCars.addEventListener("load", getData);
        createCars.addEventListener("error", fileFailed);
        createCars.open("GET", "inventory.json");
        createCars.send();
    },
 
// It should also expose a public getter to read the array of cars (e.g. getInventory).

  
    
  };

})(CarLot || {});



console.log("hi", CarLot);

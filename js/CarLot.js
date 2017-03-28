//Create one global variable (e.g. CarLot) 
// and use the IIFE pattern to augment it two times in separate JavaScript files.
var CarLot = (function (oldCarLot) {
  
  // The first IIFE should add a public function (e.g. loadInventory) that loads the inventory.json file
  //and stores the inventory in a private variable.
  return {
      
      loadInventory :  function (){
      var inventoryCars = [];
      var createCars = new XMLHttpRequest(); 
        createCars.addEventListener("load", getData);
        createCars.addEventListener("error", fileFailed);
        createCars.open("GET", "inventory.json");
        createCars.send();
    },

     getData : function() {
        var carData = JSON.parse(this.responseText).cars;
        CarLot.printToDom(carData);
      },

     fileFailed : function() {
          alert("Error loading page, Please open dev tools");
      },
 
// It should also expose a public getter to read the array of cars (e.g. getInventory).

      //getter Inventory
    getInventory : function() {

        return inventory; 
      },
      
      //setter 

    setInventory  : function(){
        inventory.push(inventory);
      },
    
  };

})(CarLot || {});



console.log("hi", CarLot);

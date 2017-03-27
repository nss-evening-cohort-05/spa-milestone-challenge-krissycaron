var CarLot = (function () {
  
  return {
      
      loadThings :  inventoryCars = [];
      var createCars = new XMLHttpRequest(); 
        createCars.addEventListener("load", getData);
        createCars.addEventListener("error", fileFailed);
        createCars.open("GET", "inventory.json");
        createCars.send();
      
  },

   function getData() {
        var carData = JSON.parse(this.responseText).cars;
        CarLot.printToDom(carData);
      };

    function fileFailed() {
          alert("Error loading page, Please open dev tools")
    },
    

        //getter Inventory
      getCars : function () {

        return inventory; 
      }
      
      //setter 

      setCars : function(inventoryFile){
        inventory.push(inventoryFile);
      }
    

    }
  };
})(CarLot || {});

console.log("hi", CarLot);

    // loadInventory = function(callback){
    //   for (var i=0; callback.cars.length; i++);
    //     inventory.push(callback.cars[i]);
    // }

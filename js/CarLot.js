var CarLot = (function (oldCarLot) {
  
  return {
      
      loadInventory :  function (){
      var inventoryCars = [];
      var createCars = new XMLHttpRequest(); 
        createCars.addEventListener("load", getData);
        createCars.addEventListener("error", fileFailed);
        createCars.open("GET", "inventory.json");
        createCars.send();
      },
  },

   function getData() {
        var carData = JSON.parse(this.responseText).cars;
        CarLot.printToDom(carData);
      };

    function fileFailed() {
          alert("Error loading page, Please open dev tools")
      }
    

        //getter Inventory
      getCars : function() {

        return inventory; 
      }
      
      //setter 

      setCars : function(){
        inventory.push(inventory);
      }
    
  };
})(CarLot || {});

console.log("hi", CarLot);

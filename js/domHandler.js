var CarLot = (function(eventHandlers) {
  eventHandlers.activateEvents = function() {
    var carCard = document.getElementsByClassName("card");
      for (var i = 0; i < carCard.length; i++) {
       carCard[i].addEventListener("click", function (event, color){
        
        var selected = event.currentTarget;
        eventHandlers.addBorderThickness(selected);
        eventHandlers.clearText();
      });
    };

    var enteredText = document.getElementById("textBox");
    enteredText.addEventListener("keyup", function(event, changedCarCard){
      CarLot.editText();
    });
  };
  return eventHandlers
}(CarLot || {}));

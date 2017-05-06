# Krissy's Used Caah's
####Single Page Applications Challenge 
###### April 2017 

#### What We Learned
This was the end of our Single Page Application Milestone. These are the technologies and elements we learned and used in this milestone challenge.  
	- JSON
	- IIFE's and Augmentors
	- XHRData Requests
	- Bootstrap Styling

Also used in this assignment: 
	- HTML
	- CSS 
	- Javascript

#### Description of Challenge: 
	The Challenge was broken into two peices, the behavior of the page and the technical requirements. The general concept was to build a used car lot website where the cars could be selected and then on selection the text box would gain focus and whatever was typed would be mirrored in the description area of the card. 

###### **Behavior**

	1. Create an array of cars in the `inventory.json` file (see example structure below). Put at least three cars in the array.
	1. When your page first loads, you need to use an XHR to load the contents of the JSON file, and parse them into a native JavaScript object.
	1. Loop over your array of cars and build up an HTML string to build a card for each car. Also, use Bootstrap to create rows. Each row should contain 3 columns. Make sure you have a parent element with a class of `container`. __Hint:__ You must build up the entire string of columns/rows before injecting into the DOM. Use a counter variable to know when to close a row after three columns.
	1. Put a standard Bootstrap navbar element at the top of your page.
	1. Put a text input field in the navigation bar.
	1. Make sure you display all properties of the car in the DOM. Basic styling is up to you.
	1. Make sure that each car card element has a CSS class which adds a black border around it.
	1. When you click on one of the car elements, change the width of the border to a higher value, and change the background color to any other color of your choosing.
	1. Also, on click of the car element, clear the value of the text input in the navbar, and put the cursor in the text input.
	1. When you start typing into the navbar's text input, the **description**, and only that property, of the currently selected car should be bound to what you are typing in and match it exactly.

###### **Technical Requirements**

	1. Create one global variable (e.g. `CarLot`) and use the IIFE pattern to augment it two times in separate JavaScript files.
	1. The first IIFE should add a public function (e.g. `loadInventory`) that loads the `inventory.json` file and stores the inventory in a private variable. It should also expose a public getter to read the array of cars (e.g. `getInventory`).
	1. The second IIFE should augment the original one with a function that creates all of the `eventHandlers` that you need for the application. Name the function `activateEvents`.

##### Images 



##### Viewing the Site 
	Clone and pull down repo and then run your local server. 



##### Contributors

Krissy Caron



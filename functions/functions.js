// Invoke each function you write with an example and console.log the result

// multiply
var multiply = function (num1, num2){
	return num1 * num2;
}
console.log(multiply (3, 5));

// whatForLunch

var whatForLunch = function (name, food){
    var sentence = ('Name' + ' had' + food + ' for lunch today.')
	return sentence;
}
console.log(whatForLunch('Allen', 'pizza'));

// isLargerThan100

var isLargerThan100 = function (number){
	if (number > 100){
		return 'This number is greater than 100.'
	
	} else return 'This number is not greater than 100.'
};
console.log(isLargerThan100(105));
// anyEvens
var thisArray = [2, 3, 4, 5, 6];

var anyEvens = function (arrayofnumbers){
   for (var i=0; i<arrayofnumbers.length; i++){
   	
   	if (arrayofnumbers[i] % 2 === 0) {return true

   		} else return false; 
   }
}
console.log (anyEvens (thisArray));

// printDataType
var printDataType = function (collection){
	console.log (collection)

//check if an object:   
    var object = collection;
if (typeof object === 'object')
	for (var key in object) {
	 return object[key];
	}    	
//if a string:
if (typeof collection === 'string')
	console.log ("I am a string.");
//if a number:
if (typeof collection === 'number')
	console.log ("I am a number.");
//if a boolean:
if (typeof collection === 'boolean')
	console.log ("I am a boolean.");
//if an array:
if (collection.isArray === true)
	for (var i=0; i<collection.length; i++)};
//if array has a value:
if (collection[i].isArray === true)		
	console.log ("I am an array.")
//if a function:
if (typeof function(){} === 'function')
	console.log ("I am a function.")

} else console.log ("I do not know what you are!  What are you?");
}


// isDivisibleBy

var isDivisibleBy = function (num1, num2){
	if ((num1/num2)%2 === 0) {return true}
		else {return false; }
}



// fizzBuzz

var fizzBuzz = function (arrayOfNumerals){
	for (var i=0; i<arrayOfNumerals.length; i++){
  
  if ((num % 3 === 0) && (num % 5 === 0)) console.log ('fizzbuzz!');
  if (num % 5===0) console.log ('buzz!');
  if (num % 3=== 0) console.log ('fizz!'); 
  
  else console.log (arrayOfNumerals[i]);

}
console.log (fizzbuzz(5));
}



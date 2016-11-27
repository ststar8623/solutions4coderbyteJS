// // ---------------------- CODERBYTE ------------------------- //

// // ********************* Challenge 1 ************************ //
// // FIRST REVERSE

// // Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

// 		function FirstReverse(str){

// 			var string = '';
// 			for(i=str.length - 1; i>=0; i--){
// 				string = string + str[i];
// 			}
// 			return string;
// 		}

// 		console.log(FirstReverse('arguement goes here'));



// // ********************* Challenge 2 ************************ //
// // FIRST FACTORIAL

// // Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it(e.g. if num=4),
// // return (4*3*2*1). For the test cases, the range will be between 1 and 18.

// 		function FirstFactorial(num) { 

// 		  // code goes here  
// 		  var newnum = 1;
// 		  for(i=1; i<=num; i++){
// 		      newnum = newnum * i;
// 		  }
// 		  return newnum; 
		         
// 		}

// 		console.log(FirstFactorial(4))



// // ********************* Challenge 3 ************************ //
// // LONGEST WORD

// // Using the JavaScript language, have the function LongestWord(sen) take the sen paramenter being passed and return the largest
// // word in the string. If there are two or more words that are the same lenght, return the first word from the string with that
// // lenght. Ignore punctuation and assume sen will not be empty.

// 		function LongestWord(sen) { 

// 			// we use the regex match function which searches the string for the
// 			// pattern and returns an array of strings it finds
// 			// in our case the pattern we define below returns words with
// 			// only the characters a through z and 0 through 9, stripping away punctuation
// 			// e.g. "hello$% ##all" becomes [hello, all]
// 			var arr = sen.match(/[a-z0-9]+/gi);

// 			// the array sort function takes a function as a parameter
// 			// which is used to compare each element in the array to the
// 			// next element in the array
// 			var sorted = arr.sort(function(a, b) {
// 			return b.length - a.length;
// 			});

// 			// this array now contains all the words in the original
// 			// string but in order from longest to shortest length
// 			// so we simply return the first element
// 			return sorted[0];
		         
// 		}

// 		console.log(LongestWord("Argument goes here ***hellos"));


// 	// Seond way to solve this challenge //
// 		function LongestWord(str){

// 			var words = str.match(/(\w+)/g);
// 			var longestword = '';
// 			for(i=0; i<words.length; i++){
// 				if(words[i].length > longestword.length){
// 					longestword = words[i];
// 				}
// 			}
// 			return longestword;
// 		}

// 		console.log(LongestWord('steven leung is okay'));



// // ********************* Challenge 4 ************************ //
// // LETTER CHANGES

// // Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it
// // using the following algorithm. Replace every letter in the stirng with the letter following in the alphebet. Then capitalize
// // every vowel in the new string (a, e, i, o, u) and finally return this modified string.

// 		function LetterChanges(str) { 

// 		  // we will replace every letter in the string with the letter following it
// 		  // by first getting the charCode number of the letter, adding 1 to it, then 
// 		  // converting this new charCode number to a letter using the fromCharCode function
// 		  // we also check to see if the character is z and if so we simply convert the z to an a
// 		  var converted = str.replace(/[a-z]/gi, function(char) { 
// 		    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
// 		  });

// 		  // we have now successfully converted each letter to the letter following it
// 		  // in the alphabet, and all we need to do now is capitalize the vowels
// 		  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
// 		    return vowel.toUpperCase();
// 		  });

// 		  // return the final string
// 		  return capitalized;
		         
// 		}
		   
// 		console.log(LetterChanges("fun times!"));  



// // ********************* Challenge 5 ************************ //
// // SIMPLE ADDING

// // Have the function SimpleAdding(num) add up al lthe number from 1 to num. The parameter num will be 1 to 1000.

// 		function SimpleAdding(num){
// 			var newnum = 0;
// 			for(i=num; i>0; i--){
// 				newnum = newnum + i;
// 			}
// 			return newnum;
// 		}

// 		console.log(SimpleAdding(99));



// // ********************* Challenge 6 ************************ //
// // LETTER CAPITALIZE 

// // have a function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

// 		function LetterCapitalize(str){
// 			var words = str.split(' ');
// 			for(i=0; i<words.length; i++){
// 				words[i] = words[i].substring(0 , 1).toUpperCase() + words[i].substring(1);
// 			}
// 			return words.join(' ');
// 		}

// 		console.log(LetterCapitalize('arguement goes here'));


// // Second way to solve this challenge

// 		function LetterCapitalize(str) { 
		  
// 			// our regex [a-z] matches every alphabetic character in the string
// 			// but the \b before it specifies a word boundary, in other words, nothing can 
// 			// come before those letters therefore selecting every word in the string
// 			return str.replace(/\b[a-z]/gi, function(char) { 
// 				return char.toUpperCase();
// 			});
		         
// 		}
		   
// 		console.log(LetterCapitalize("hello world from coderbyte"));  



// // ********************* Challenge 7 ************************ //
// // SIMPLE SYMBOLS

// // Using the JavaScript language, have the function SimpleSymobls(str) take the str paramter being passed and determine if it is an
// // acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several 
// // letters between them and for the string to be true each letter must be surrounded by a + symbol.

// 		function SimpleSymbols(str){

// 			var str = '=' + str + '=';
// 			for(i=0; i<str.length; i++){
// 				if(str[i].match(/[a-z]/i) !== null){
// 					if(str[i-1] !== '+' || str[i+1] !== '+'){
// 						return false;
// 					}
// 				}
// 			}
// 			return true;
// 		}

// 		console.log(SimpleSymbols('+d+=3=+s+'));
// 		console.log(SimpleSymbols('dk+=dkkf'));



// // ********************* Challenge 8 ************************ //
// // CHECK NUMS

// // Have a function CheckNums(num1, num2) take both parameters being passed and return the string
// // true if num2 is greater than num1, otherwise return the string false, if they both equal return string -1.

// 		function CheckNums(num1, num2){
// 			return (num1 === num2) ? '-1' : (num2 > num1) ? true : false;
// 		}

// 		console.log(CheckNums(9, 15));
// 		console.log(CheckNums(9, 9));
// 		console.log(CheckNums(15, 9));



// // ********************* Challenge 9 ************************ //
// // TIME CONVERT

// // have a function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter convert to.

// 		function TimeConvert(num){
// 			var hours = Math.floor(num / 60);
// 			var minutes = num % 60;

// 			var time = hours + ":" + minutes;
// 			return time;
// 		}

// 		console.log(TimeConvert(128));



// // ********************* Challenge 10 ************************ //
// // ALPHABET SOUP

// // have a function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical

// 		function AlphabetSoup(str){
// 			var arr = str.split('');
// 			var sorted = arr.sort();
// 			return sorted.join('');
// 		}

// 		console.log(AlphabetSoup('Steven Leung'))



// // ********************* Challenge 11 ************************ //
// // ABCHECK

// // have a function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by
// // exactly 3 places anywhere in the string at least once.

// 		function ABCheck(str){
// 			var str = str.toLowerCase();
// 			for(i=0; i<str.length; i++){
// 				if(str[i] === 'a' && str[i+4] === 'b') { return true; }
// 				if(str[i] === 'b' && str[i+4] === 'a') { return true; }

// 			}
// 			return false;
// 		}

// 		console.log(ABCheck('aersbkldf'));

// 		// ----------------------- //
// 		function ABCheck(str){
// 			for(i=0; i<str.length; i++){

// 				if(str.charAt(i) === 'a'){
// 					if(str.charAt(i+4) === 'b' || str.charAt(i-4) === 'b'){
// 						return true;
// 					}
// 				}
// 			}
// 			return false;
// 		}

// 		// ----------------------- //
// 		function ABCheck(str){
// 			return /a...b/.test(str);
// 		}

// 		// ----------------------- //
// 		function ABCheck(str){
// 			var ans = str.match(/a...b/)
// 			return ans === null ? false : true;
// 		}



// // ********************* Challenge 12 ************************ //
// // VOWEL COUNT

// // have a function VowelCount(str) take the str string parameter being passed and return
// // the number of vowels the string contains.

// 		function VowelCount(str){
// 			return str.match(/[aeiou]/gi).length;
// 		}
// 		console.log(VowelCount('steven leung is okay wors'));


// // ********************* Challenge 13 ************************ //
// // WORD COUNT

// // have a function WordCount(str) take the str string parameter being passed and return
// // number of words the string contains

// 		function WordCount(str){
// 			return str.split(' ').length;
// 		}
// 		console.log(WordCount('steven leung is okay wors'));


// // ********************* Challenge 14 ************************ //
// // EX OH

// // have a function Exoh(str) take the str parameter being passed and return the string
// // true if there is equal number of x's and o's.

// 		function Exoh(str){
// 			var exoh = str.match(/[xo]/gi);
// 			console.log(exoh);
// 			var x = [], o = [];
// 			for(i=0; i<exoh.length;i++){
// 				if(exoh[i] === 'x'){
// 					x.push(exoh[i]);
// 				} else {
// 					o.push(exoh[i]);
// 				}
// 			}
// 			return x.length === o.length;
// 		}
// 		console.log(Exoh('xxxaaaooo'));

// 		// Another way //

// 		function Exoh(str) { 

// 			// we split the string with the separator being
// 			// the x's and o's and compare them

// 			// this returns a string containing only o's
// 			var x = str.split("x").join("");

// 			// this returns a string containing only x's
// 			var o = str.split("o").join("");

// 			// see if their lengths are equal
// 			return x.length === o.length;
		     
// 		}

// 		console.log(Exoh("xooox")); 

// 		// Another Way //

// 		function Exoh(str) { 

// 			// split the string into an array
// 			var arr = str.split("");

// 			// create a new array of x's by using the filter function
// 			// which takes a test function with 3 parameters:
// 			// the element, its index, and the array it came from
// 			// and if the test passes it adds this element to the new array
// 			var x = arr.filter(function(elem, index, self) { 
// 			return elem === 'x';
// 			});

// 			// because we know the string can only contains x's and o's
// 			// we can subtract the length of our new array of x's from 
// 			// arr and that will leave us with the number of o's
// 			var o = arr.length - x.length;

// 			// see if their lengths are equal
// 			return x.length === o;
		 
// 		}

// 		console.log(Exoh("xooox")); 


// // ********************* Challenge 15 ************************ //
// // 

// // have a function Palindrome(str) take the str parameter being passed and return the string true if the parameter
// // is a palindrome. (the string is the same forward as it is backward) otherwise return the string false.

// 		function Palindrome(str){

// 			str = str.match(/[a-z]/gi);

// 			var backStr = [];

// 			for(i=str.length - 1; i>=0; i--){
// 				backStr.push(str[i]);
// 				if(backStr.join() === str.join()){
// 					return true;
// 				}
// 			}
// 			return false;
			
// 		}

// 		console.log(Palindrome('never odd or even'));

// 		// second way //

// 		function Palindrome(str){
// 			str = str.split(' ').join('').toLowerCase();
// 			var rev = str.split('').reverse().join('');
// 			return str === rev;
// 		}

// 		console.log(Palindrome('aeiouoiea'))



// // ********************* Challenge 16 ************************ //
// // Arith Geo

// // have a function ArithGeo(arr) take the array of numbers stored in arr and return the
// // string 'Arithmetic' if the sequence follows an arithmetic pattern or return 'Geometric'
// // if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

		// function ArithGeo(arr){
		// 	var arith = arr[1]-arr[0], geo = arr[1]/arr[0], arithcount = 1, geocount = 1;
		// 	for(i=1; i<arr.length; i++){
		// 		if(arr[i+1] - arr[i] === arith){
		// 			arithcount++;
		// 		} 
		// 		else if(arr[i+1]/arr[i] === geo){
		// 			geocount++;
		// 		}
		// 		else {
		// 			break;
		// 		}
		// 	}
		// 	return arithcount === arr.length-1 ? 'Arithmetic' : geocount === arr.length-1 ? 'Geometric' : -1;
		// }

		// console.log(ArithGeo([1,2,3,4]));
		// console.log(ArithGeo([1,3,9,27]));
		// console.log(ArithGeo([1,3,6,9]));


// // ********************* Challenge 17 ************************ //
// // 				****** Array Addition I ******				  //
// // have a function ArrayAdditionI(arr) take the array of numbers stored in arr and return
// // the string true if any combination of numbers in the array can be added up to equal the
// // largest number in the array, otherwise return the string false.

		// function ArrayAdditionI(arr) {
		  
		//   // get largest number and remove it from array
		//   var sum = Math.max.apply(null, arr);
		//   arr.splice(arr.indexOf(sum), 1);
		  
		//   // power set
		//   var sets = [[]];

		//   // generate the power set and for each new set
		//   // check if the temporary sum equals our sum above
		//   for (var i = 0; i < arr.length; i++) {
		//     for (var j = 0, len = sets.length; j < sets.length; j++) {
		//       var temp = sets[j].concat(arr[i]);
		//       sets.push(temp);
		//       var s = temp.reduce(function(p, c) { return p + c; });
		//       if (s === sum) { return "true"; }
		//     }
		//   }
		//   console.log(sets)
		//   return "false";
		         
		// }
		// console.log(ArrayAdditionI([5,7,16,1,2]));
		// console.log(ArrayAdditionI([3,5,-1,8,12]));
		// console.log(ArrayAdditionI([1,2,3,100]));


// // ********************* Challenge 18 ************************ //
// // ************* LetterCountI ************
// // have a function LetterCountI(str) take str parameter being passed and return the first word
// // with the greatest number of repeated letters. if no words with repeating letters return -1.


		// function LetterCountI(str) { 

		// 	// array of words
		// 	var words = str.split(" ");

		// 	// the table that will contain each word with a key and value pair
		// 	// being the characters and the number of times they appeared
		// 	// e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
		// 	var table = {};

		// 	// loop through each word
		// 	for (var i = 0; i < words.length; i++) {

		// 		// create new entry in table with the key 
		// 		// being this word
		// 		var thisWord = words[i];
		// 		table[thisWord] = {};

		// 		// create a key/value pair that will store
		// 		// the highest letter count for each word
		// 		table[thisWord]["highest"] = 0;

		// 		// loop through each character in word and
		// 		// store number of times each letter appears
		// 		for (var c = 0; c < words[i].length; c++) {

		// 			// see if this character already exists in table for
		// 			// this word: if so add 1 to the count, if not set count = 1
		// 			var thisChar = thisWord[c];
		// 			table[thisWord][thisChar] === undefined ?
		// 			table[thisWord][thisChar] = 1 :
		// 			table[thisWord][thisChar] += 1;

		// 			// update the highest letter count for each 
		// 			// new letter in the iteration
		// 			if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
		// 				table[thisWord]["highest"] = table[thisWord][thisChar];
		// 			}

		// 		}

		// 	}

		// 	// setup a new object that will store the word
		// 	// with the highest number of repeating characters
		// 	var answer = {word: null, count: 1};

		// 	// now determine what word has the highest number 
		// 	// of repeating letters by accessing the "highest"
		// 	// property of each word in the table
		// 	for (var w in table) {
		// 		if (table[w]["highest"] > answer["count"]) {
		// 		answer["count"] = table[w]["highest"];
		// 		answer["word"] = w;
		// 		}
		// 	}

		// 	return (answer["count"] === 1) ? -1 : answer["word"];

		// }

		// console.log(LetterCountI("world hello from coderbyte"));


// // ********************* Challenge 19 ************************ //
// // ********* Second GreatLow **********
// // have a function SecondGreatLow(arr) take the array of numbers stored in arr and 
// // return the second lowest and greatest numbers

		// function SecondGreatLow(arr) { 

		// // first we create a unique array by using the filter function
		// // we check to see if the index of the current element in the array 
		// // is equal to the first index of the element, if so then add the
		// // element to the new array
		// var unique = arr.filter(function(elem, index, self) {
		// 	return self.indexOf(elem) === index;
		// });

		// console.log(unique)

		// // sort the unique array in ascending order
		// var sorted = unique.sort(function(a, b) {
		// 	return a - b;
		// });

		// // return the second smallest and largest elements
		// // but also check to make sure there is more than 1
		// // element in the array
		// if (sorted.length < 2) { 
		// 	return sorted[0] + " " + sorted[0]; 
		// 	} else {
		// 	return sorted[1] + " " + sorted[sorted.length - 2];
		// 	}

		// }
   
		// console.log(SecondGreatLow([2, 10, 5, 1, -12, 140])); 
		// console.log(SecondGreatLow([1,42,42,180]));
		// console.log(SecondGreatLow([4, 90]));
		// console.log(SecondGreatLow([2,2,2,2]));


// // ********************* Challenge 20 ************************ //
// // ******** Division Stringified ********* //
// // have a function DivisionStringified(num1, num2) take both parameters being passed, divide num1 by num2
// // and return the result as a string with properly formatted commas. if an answer only 3 digits long,
// // return the number with no commas. for example: if num1 is 123456789 and num2 is 10000 the output should be "12,346"

		// function DivisionStringified(num1, num2) { 

		// 	// first we divide and then round accordingly
		// 	var div = Math.round(num1/num2);

		// 	// convert answer to string and then
		// 	// to an array separating each number
		// 	div = div.toString().split('');

		// 	// keep counter for inserting comma logic
		// 	var insert = 0;

		// 	// logic for inserting a comma every 3
		// 	// elements in the array starting from the end
		// 	// e.g. ['4', '5', '3', '2'] becomes ['4', ',5', '3', '2']
		// 	// and then we would join all the numbers into a string
		// 	if (div.length > 3) {
		// 		for (var i = div.length-1; i >= 0; i--) {
		// 			insert++;
		// 			if (insert === 3) { 
		// 				div[i] = ',' + div[i];
		// 				insert = 0;
		// 			}
		// 		}
		// 	}

		// 	// return the elements joined into a proper string
		// 	return div.join('');
		// }

		// DivisionStringified(1400500, 52); 
// // // ---------------------- CODERBYTE ------------------------- //

// // // ********************* Challenge 1 ************************ //
// // // FIRST REVERSE

// // // Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

// // 		function FirstReverse(str){

// // 			var string = '';
// // 			for(i=str.length - 1; i>=0; i--){
// // 				string = string + str[i];
// // 			}
// // 			return string;
// // 		}

// // 		console.log(FirstReverse('arguement goes here'));



// // // ********************* Challenge 2 ************************ //
// // // FIRST FACTORIAL

// // // Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it(e.g. if num=4),
// // // return (4*3*2*1). For the test cases, the range will be between 1 and 18.

// // 		function FirstFactorial(num) { 

// // 		  // code goes here  
// // 		  var newnum = 1;
// // 		  for(i=1; i<=num; i++){
// // 		      newnum = newnum * i;
// // 		  }
// // 		  return newnum; 
		         
// // 		}

// // 		console.log(FirstFactorial(4))



// // // ********************* Challenge 3 ************************ //
// // // LONGEST WORD

// // // Using the JavaScript language, have the function LongestWord(sen) take the sen paramenter being passed and return the largest
// // // word in the string. If there are two or more words that are the same lenght, return the first word from the string with that
// // // lenght. Ignore punctuation and assume sen will not be empty.

// // 		function LongestWord(sen) { 

// // 			// we use the regex match function which searches the string for the
// // 			// pattern and returns an array of strings it finds
// // 			// in our case the pattern we define below returns words with
// // 			// only the characters a through z and 0 through 9, stripping away punctuation
// // 			// e.g. "hello$% ##all" becomes [hello, all]
// // 			var arr = sen.match(/[a-z0-9]+/gi);

// // 			// the array sort function takes a function as a parameter
// // 			// which is used to compare each element in the array to the
// // 			// next element in the array
// // 			var sorted = arr.sort(function(a, b) {
// // 			return b.length - a.length;
// // 			});

// // 			// this array now contains all the words in the original
// // 			// string but in order from longest to shortest length
// // 			// so we simply return the first element
// // 			return sorted[0];
		         
// // 		}

// // 		console.log(LongestWord("Argument goes here ***hellos"));


// // 	// Seond way to solve this challenge //
// // 		function LongestWord(str){

// // 			var words = str.match(/(\w+)/g);
// // 			var longestword = '';
// // 			for(i=0; i<words.length; i++){
// // 				if(words[i].length > longestword.length){
// // 					longestword = words[i];
// // 				}
// // 			}
// // 			return longestword;
// // 		}

// // 		console.log(LongestWord('steven leung is okay'));



// // // ********************* Challenge 4 ************************ //
// // // LETTER CHANGES

// // // Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it
// // // using the following algorithm. Replace every letter in the stirng with the letter following in the alphebet. Then capitalize
// // // every vowel in the new string (a, e, i, o, u) and finally return this modified string.

// // 		function LetterChanges(str) { 

// // 		  // we will replace every letter in the string with the letter following it
// // 		  // by first getting the charCode number of the letter, adding 1 to it, then 
// // 		  // converting this new charCode number to a letter using the fromCharCode function
// // 		  // we also check to see if the character is z and if so we simply convert the z to an a
// // 		  var converted = str.replace(/[a-z]/gi, function(char) { 
// // 		    return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
// // 		  });

// // 		  // we have now successfully converted each letter to the letter following it
// // 		  // in the alphabet, and all we need to do now is capitalize the vowels
// // 		  var capitalized = converted.replace(/a|e|i|o|u/gi, function(vowel) { 
// // 		    return vowel.toUpperCase();
// // 		  });

// // 		  // return the final string
// // 		  return capitalized;
		         
// // 		}
		   
// // 		console.log(LetterChanges("fun times!"));  



// // // ********************* Challenge 5 ************************ //
// // // SIMPLE ADDING

// // // Have the function SimpleAdding(num) add up al lthe number from 1 to num. The parameter num will be 1 to 1000.

// // 		function SimpleAdding(num){
// // 			var newnum = 0;
// // 			for(i=num; i>0; i--){
// // 				newnum = newnum + i;
// // 			}
// // 			return newnum;
// // 		}

// // 		console.log(SimpleAdding(99));



// // // ********************* Challenge 6 ************************ //
// // // LETTER CAPITALIZE 

// // // have a function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

// // 		function LetterCapitalize(str){
// // 			var words = str.split(' ');
// // 			for(i=0; i<words.length; i++){
// // 				words[i] = words[i].substring(0 , 1).toUpperCase() + words[i].substring(1);
// // 			}
// // 			return words.join(' ');
// // 		}

// // 		console.log(LetterCapitalize('arguement goes here'));


// // // Second way to solve this challenge

// // 		function LetterCapitalize(str) { 
		  
// // 			// our regex [a-z] matches every alphabetic character in the string
// // 			// but the \b before it specifies a word boundary, in other words, nothing can 
// // 			// come before those letters therefore selecting every word in the string
// // 			return str.replace(/\b[a-z]/gi, function(char) { 
// // 				return char.toUpperCase();
// // 			});
		         
// // 		}
		   
// // 		console.log(LetterCapitalize("hello world from coderbyte"));  



// // // ********************* Challenge 7 ************************ //
// // // SIMPLE SYMBOLS

// // // Using the JavaScript language, have the function SimpleSymobls(str) take the str paramter being passed and determine if it is an
// // // acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several 
// // // letters between them and for the string to be true each letter must be surrounded by a + symbol.

// // 		function SimpleSymbols(str){

// // 			var str = '=' + str + '=';
// // 			for(i=0; i<str.length; i++){
// // 				if(str[i].match(/[a-z]/i) !== null){
// // 					if(str[i-1] !== '+' || str[i+1] !== '+'){
// // 						return false;
// // 					}
// // 				}
// // 			}
// // 			return true;
// // 		}

// // 		console.log(SimpleSymbols('+d+=3=+s+'));
// // 		console.log(SimpleSymbols('dk+=dkkf'));



// // // ********************* Challenge 8 ************************ //
// // // CHECK NUMS

// // // Have a function CheckNums(num1, num2) take both parameters being passed and return the string
// // // true if num2 is greater than num1, otherwise return the string false, if they both equal return string -1.

// // 		function CheckNums(num1, num2){
// // 			return (num1 === num2) ? '-1' : (num2 > num1) ? true : false;
// // 		}

// // 		console.log(CheckNums(9, 15));
// // 		console.log(CheckNums(9, 9));
// // 		console.log(CheckNums(15, 9));



// // // ********************* Challenge 9 ************************ //
// // // TIME CONVERT

// // // have a function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter convert to.

// // 		function TimeConvert(num){
// // 			var hours = Math.floor(num / 60);
// // 			var minutes = num % 60;

// // 			var time = hours + ":" + minutes;
// // 			return time;
// // 		}

// // 		console.log(TimeConvert(128));



// // // ********************* Challenge 10 ************************ //
// // // ALPHABET SOUP

// // // have a function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical

// // 		function AlphabetSoup(str){
// // 			var arr = str.split('');
// // 			var sorted = arr.sort();
// // 			return sorted.join('');
// // 		}

// // 		console.log(AlphabetSoup('Steven Leung'))



// // // ********************* Challenge 11 ************************ //
// // // ABCHECK

// // // have a function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by
// // // exactly 3 places anywhere in the string at least once.

// // 		function ABCheck(str){
// // 			var str = str.toLowerCase();
// // 			for(i=0; i<str.length; i++){
// // 				if(str[i] === 'a' && str[i+4] === 'b') { return true; }
// // 				if(str[i] === 'b' && str[i+4] === 'a') { return true; }

// // 			}
// // 			return false;
// // 		}

// // 		console.log(ABCheck('aersbkldf'));

// // 		// ----------------------- //
// // 		function ABCheck(str){
// // 			for(i=0; i<str.length; i++){

// // 				if(str.charAt(i) === 'a'){
// // 					if(str.charAt(i+4) === 'b' || str.charAt(i-4) === 'b'){
// // 						return true;
// // 					}
// // 				}
// // 			}
// // 			return false;
// // 		}

// // 		// ----------------------- //
// // 		function ABCheck(str){
// // 			return /a...b/.test(str);
// // 		}

// // 		// ----------------------- //
// // 		function ABCheck(str){
// // 			var ans = str.match(/a...b/)
// // 			return ans === null ? false : true;
// // 		}



// // // ********************* Challenge 12 ************************ //
// // // VOWEL COUNT

// // // have a function VowelCount(str) take the str string parameter being passed and return
// // // the number of vowels the string contains.

// // 		function VowelCount(str){
// // 			return str.match(/[aeiou]/gi).length;
// // 		}
// // 		console.log(VowelCount('steven leung is okay wors'));


// // // ********************* Challenge 13 ************************ //
// // // WORD COUNT

// // // have a function WordCount(str) take the str string parameter being passed and return
// // // number of words the string contains

// // 		function WordCount(str){
// // 			return str.split(' ').length;
// // 		}
// // 		console.log(WordCount('steven leung is okay wors'));


// // // ********************* Challenge 14 ************************ //
// // // EX OH

// // // have a function Exoh(str) take the str parameter being passed and return the string
// // // true if there is equal number of x's and o's.

// // 		function Exoh(str){
// // 			var exoh = str.match(/[xo]/gi);
// // 			console.log(exoh);
// // 			var x = [], o = [];
// // 			for(i=0; i<exoh.length;i++){
// // 				if(exoh[i] === 'x'){
// // 					x.push(exoh[i]);
// // 				} else {
// // 					o.push(exoh[i]);
// // 				}
// // 			}
// // 			return x.length === o.length;
// // 		}
// // 		console.log(Exoh('xxxaaaooo'));

// // 		// Another way //

// // 		function Exoh(str) { 

// // 			// we split the string with the separator being
// // 			// the x's and o's and compare them

// // 			// this returns a string containing only o's
// // 			var x = str.split("x").join("");

// // 			// this returns a string containing only x's
// // 			var o = str.split("o").join("");

// // 			// see if their lengths are equal
// // 			return x.length === o.length;
		     
// // 		}

// // 		console.log(Exoh("xooox")); 

// // 		// Another Way //

// // 		function Exoh(str) { 

// // 			// split the string into an array
// // 			var arr = str.split("");

// // 			// create a new array of x's by using the filter function
// // 			// which takes a test function with 3 parameters:
// // 			// the element, its index, and the array it came from
// // 			// and if the test passes it adds this element to the new array
// // 			var x = arr.filter(function(elem, index, self) { 
// // 			return elem === 'x';
// // 			});

// // 			// because we know the string can only contains x's and o's
// // 			// we can subtract the length of our new array of x's from 
// // 			// arr and that will leave us with the number of o's
// // 			var o = arr.length - x.length;

// // 			// see if their lengths are equal
// // 			return x.length === o;
		 
// // 		}

// // 		console.log(Exoh("xooox")); 


// // // ********************* Challenge 15 ************************ //
// // // 

// // // have a function Palindrome(str) take the str parameter being passed and return the string true if the parameter
// // // is a palindrome. (the string is the same forward as it is backward) otherwise return the string false.

// // 		function Palindrome(str){

// // 			str = str.match(/[a-z]/gi);

// // 			var backStr = [];

// // 			for(i=str.length - 1; i>=0; i--){
// // 				backStr.push(str[i]);
// // 				if(backStr.join() === str.join()){
// // 					return true;
// // 				}
// // 			}
// // 			return false;
			
// // 		}

// // 		console.log(Palindrome('never odd or even'));

// // 		// second way //

// // 		function Palindrome(str){
// // 			str = str.split(' ').join('').toLowerCase();
// // 			var rev = str.split('').reverse().join('');
// // 			return str === rev;
// // 		}

// // 		console.log(Palindrome('aeiouoiea'))



// // // ********************* Challenge 16 ************************ //
// // // Arith Geo

// // // have a function ArithGeo(arr) take the array of numbers stored in arr and return the
// // // string 'Arithmetic' if the sequence follows an arithmetic pattern or return 'Geometric'
// // // if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

// 		// function ArithGeo(arr){
// 		// 	var arith = arr[1]-arr[0], geo = arr[1]/arr[0], arithcount = 1, geocount = 1;
// 		// 	for(i=1; i<arr.length; i++){
// 		// 		if(arr[i+1] - arr[i] === arith){
// 		// 			arithcount++;
// 		// 		} 
// 		// 		else if(arr[i+1]/arr[i] === geo){
// 		// 			geocount++;
// 		// 		}
// 		// 		else {
// 		// 			break;
// 		// 		}
// 		// 	}
// 		// 	return arithcount === arr.length-1 ? 'Arithmetic' : geocount === arr.length-1 ? 'Geometric' : -1;
// 		// }

// 		// console.log(ArithGeo([1,2,3,4]));
// 		// console.log(ArithGeo([1,3,9,27]));
// 		// console.log(ArithGeo([1,3,6,9]));


// // // ********************* Challenge 17 ************************ //
// // // 				****** Array Addition I ******				  //
// // // have a function ArrayAdditionI(arr) take the array of numbers stored in arr and return
// // // the string true if any combination of numbers in the array can be added up to equal the
// // // largest number in the array, otherwise return the string false.

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



// // // ********************* Challenge 18 ************************ //
// // // ************* LetterCountI ************
// // // have a function LetterCountI(str) take str parameter being passed and return the first word
// // // with the greatest number of repeated letters. if no words with repeating letters return -1.


// 		function LetterCountI(str) { 

// 			// array of words
// 			var words = str.split(" ");

// 			// the table that will contain each word with a key and value pair
// 			// being the characters and the number of times they appeared
// 			// e.g. {hello: {h: 1, e: 1, l: 2, o: 1}}
// 			var table = {};

// 			// loop through each word
// 			for (var i = 0; i < words.length; i++) {

// 				// create new entry in table with the key 
// 				// being this word
// 				var thisWord = words[i];
// 				table[thisWord] = {};

// 				// create a key/value pair that will store
// 				// the highest letter count for each word
// 				table[thisWord]["highest"] = 0;

// 				// loop through each character in word and
// 				// store number of times each letter appears
// 				for (var c = 0; c < words[i].length; c++) {

// 					// see if this character already exists in table for
// 					// this word: if so add 1 to the count, if not set count = 1
// 					var thisChar = thisWord[c];
// 					table[thisWord][thisChar] === undefined ?
// 					table[thisWord][thisChar] = 1 :
// 					table[thisWord][thisChar] += 1;

// 					// update the highest letter count for each 
// 					// new letter in the iteration
// 					if (table[thisWord][thisChar] > table[thisWord]["highest"]) {
// 						table[thisWord]["highest"] = table[thisWord][thisChar];
// 					}

// 				}

// 			}

// 			// setup a new object that will store the word
// 			// with the highest number of repeating characters
// 			var answer = {word: null, count: 1};

// 			// now determine what word has the highest number 
// 			// of repeating letters by accessing the "highest"
// 			// property of each word in the table
// 			for (var w in table) {
// 				if (table[w]["highest"] > answer["count"]) {
// 				answer["count"] = table[w]["highest"];
// 				answer["word"] = w;
// 				}
// 			}

// 			return (answer["count"] === 1) ? -1 : answer["word"];

// 		}

		// console.log(LetterCountI("world hello from coderbyte"));



// // // ********************* Challenge 19 ************************ //
// // // ********* Second GreatLow **********
// // // have a function SecondGreatLow(arr) take the array of numbers stored in arr and 
// // // return the second lowest and greatest numbers

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

		// console.log(sorted);

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


// // // ********************* Challenge 20 ************************ //
// // // ******** Division Stringified ********* //
// // // have a function DivisionStringified(num1, num2) take both parameters being passed, divide num1 by num2
// // // and return the result as a string with properly formatted commas. if an answer only 3 digits long,
// // // return the number with no commas. for example: if num1 is 123456789 and num2 is 10000 the output should be "12,346"

// 		function DivisionStringified(num1, num2) { 

// 			// first we divide and then round accordingly
// 			var div = Math.round(num1/num2);

// 			// convert answer to string and then
// 			// to an array separating each number
// 			div = div.toString().split('');

// 			// keep counter for inserting comma logic
// 			var insert = 0;

// 			// logic for inserting a comma every 3
// 			// elements in the array starting from the end
// 			// e.g. ['4', '5', '3', '2'] becomes ['4', ',5', '3', '2']
// 			// and then we would join all the numbers into a string
// 			if (div.length > 3) {
// 				for (var i = div.length-1; i >= 0; i--) {
// 					insert++;
// 					if (insert === 3) { 
// 						div[i] = ',' + div[i];
// 						insert = 0;
// 					}
// 				}
// 			}

// 			// return the elements joined into a proper string
// 			return div.join('');
// 		}

		// console.log(DivisionStringified(1400500, 52));



// // // ********************* Challenge 21 ************************ //
// // // ******** Counting MinutesI ********* //
// // // have a function that take the str parameter being passed which will be two times separated by a hypen
// // // and return the total number of minutes between the two times. 
// function CountingMinutesI(str) { 

//   // code goes here  
//   let arr, col1, col2, hour1, hour2, min1, min2, ampm1, ampm2, clock1, clock2, output;
//   arr = str.split('-');
//   col1 = arr[0].indexOf(':');
//   col2 = arr[1].indexOf(':');
//   hour1 = Number(arr[0].slice(0, col1));
//   hour2 = Number(arr[1].slice(0, col2));
//   min1 = Number(arr[0].slice(col1+1, col1+3));
//   min2 = Number(arr[1].slice(col2+1, col2+3));
//   ampm1 = arr[0].slice(-2);
//   ampm2 = arr[1].slice(-2);
  
//   if(ampm1 == 'pm' && hour1 != 12){
//   	hour1 += 12;
//   }
//   if(ampm2 == 'pm' && hour2 != 12){
//   	hour2 += 12;
//   }
//   if(hour1 == 12 && ampm1 == 'am'){
//   	hour1 = 0;
//   }
//   if(hour2 == 12 && ampm2 == 'am'){
//   	hour2 = 0;
//   }
  
//   clock1 = hour1*60 + min1;
//   clock2 = hour2*60 + min2;

//   output = clock2 - clock1;

//   if(output < 0){
//   	output = output + (60*24);
//   }
//   return output;
// }

// console.log(CountingMinutesI("12:30pm-12:00am"));
// console.log(CountingMinutesI("1:23am-1:08am"));
// console.log(CountingMinutesI("5:00pm-5:11pm"));
// console.log(CountingMinutesI("12:31pm-12:34pm"));

// // // ********************* Challenge 22 ************************ //
// // // ******** Mean & Mode ********* //
// // // take an array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't.
// function MeanMode(arr) { 

//   // code goes here  
//   let mode = {}, mean = 0, index = 0, max = 0;
  
//   for(let i = 0, len = arr.length; i < len; i++){
//       mean += arr[i];
//       let x = arr[i];
//       if(!mode[x]){
//           mode[x] = 1;
//       } else {
//           mode[x] += 1;
//       }
//   }
  
//   for(let obj in mode){
//       if(mode[obj] > max){
//           max = mode[obj];
//           index = obj;
//       }
//   }
  
//   mean = Math.round(mean / arr.length);
  
//   if(index == mean){
//       return 1;
//   } else {
//       return 0;
//   }
         
// }

// console.log(MeanMode([4,4,4,4,6]));

// // // ********************* Challenge 23 ************************ //
// // // ******** Dash Insert ********* //
// // // have a function insert dashed '-' between each two odd numbers in str.
// function DashInsert(str) { 

//   // code goes here  
//   let arr = str.split('');
//   for(let i = 0, len = arr.length; i < len-1; i++){
//       if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0){
//           arr[i] = arr[i] + '-';
//       }
//   }
//   return arr.join('');
         
// }

// console.log(DashInsert('941239485'));


// // // ********************* Challenge 24 ************************ //
// // // ******** Swap Case ********* //
// // // have a function take the str parameter and swap the case of each character.
// function SwapCase(str) { 

//   // code goes here  
//   let words = {a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', j: 'J', k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z' };
  
//   let arr = str.split('');
//   for(let i = 0, len = arr.length; i < len; i++){
//       for(let word in words){
//           if(arr[i] == word){
//               arr[i] = words[word];
//           } else
//           if(arr[i] == words[word]){
//               arr[i] = word;
//           }
//       }
//   }
//   return arr.join('');
// }

// console.log(SwapCase("Sup DUDE!!?"));


// // // ********************* Challenge 25 ************************ //
// // // ******** Number Addition ********* //
// // // have a function tkae the str parameter, search all the numbers in the string, add them together,
// // // then return the final number. FOr example: if str is '88Hello 3World' the output should be 91.
// function NumberAddition(str) { 

//   // code goes here  
//   let arr = str.match(/[0-9]+/g);
//   let number = 0;
  
//   for(let i = 0, len = arr.length; i < len; i++){
//   	number += Number(arr[i]);
//   }
//   return number;
// }

// console.log(NumberAddition("10 2One Number*1*"));

// // // ********************* Challenge 26 ************************ //
// // // ******** Third Greatest ********* //
// // // have a function take the array of strings stored in strArr and return the third largest word
// // // within in.

// function ThirdGreatest(strArr) { 

//   // code goes here  
//   let strLength = strArr.sort(function(a, b){
//       return b.length - a.length
//   })
  
//   return strLength[2];
         
// }

// console.log(ThirdGreatest(['hello', 'world', 'great', 'goodbye']))

// // // ********************* Challenge 27 ************************ //
// // // ******** Powers of Two ********* //
// // // have a function PowersofTwo take the num parameter being passed which will be an integer and return
// // // the string true if its a power of two

// function PowersofTwo(num){
// 	let sum = 0;
// 	let counter = 0;

// 	while(sum < num){
// 		sum = Math.pow(2, counter)
// 		counter++;
// 	}
// 	return sum === num;
// }

// console.log(PowersofTwo(129));

// // // ********************* Challenge 28 ************************ //
// // // ******** Additive Persistence ********* //

// function AdditivePersistence(num){

// 	let arr = num.toString().split('');

// 	while(arr.length > 1){
// 		let sum = 0;
// 		for(i=0; i<arr.length; i++){
// 			sum += Number(arr[i]);
// 		}
// 		return 1 + AdditivePersistence(sum);
// 	}
// 	return 0;

// }

// console.log(AdditivePersistence(1234));

// // // ********************* Challenge 29 ************************ //
// // // ******** Multiplicative Persistence ********* //
// // // have a function take the num parameter being passed which will always
// // // be a positive integer and return its mulitiplicative persistence which
// // // is the number of times you must mulitply the digits in num until you reach
// // // a singlge digit.

// function MultiplicativePersistence(num) { 

//   // code goes here  
//   function num2arr(num){
//       return num.toString().split('').map((num)=>{return parseInt(num)})
//   }
//   function arr2num(arr){
//       return arr.reduce((a,b)=>{return a*b})
//   }
  
//   let counter = 0;
//   while(num > 9){
//       counter++;
//       num = arr2num(num2arr(num));
//   }
//   return counter;
// }

// console.log(MultiplicativePersistence(99));

// // // ********************* Challenge 30 ************************ //
// // // ******** Results for Off Line Minimum ********* //
// function OffLineMinimum(strArr) { 
//   var myArr = [];
//   var finalArr = [];
//   for(var i=0;i<strArr.length;i++){
//     if(strArr[i].match(/\d+/g)){
//       myArr.push(strArr[i])
//     }
//     else{
//       myArr.sort(function(a,b){return a-b});
//       finalArr.push(myArr.shift());
//     }
//   }
//   return finalArr.join(',');
  
// }

// console.log(OffLineMinimum(["3","E","1","E","2","3"]));

// // // ********************* Challenge 31 ************************ //
// // // ******** Changing Sequence ********* //
// // // have a function changingSequence(arr) take the array of numbers stored in arr and return the index
// // // at which at numbers stop increasing and begin decreasing or stop decreasing and being increasing.
// function ChangingSequence(arr) { 

//   // check if first two numbers form an increasing sequence
//   var increasing = arr[1] > arr[0] ? true : false;
  
//   // loop through the rest of the array
//   for (var i = 2; i < arr.length; i++) {
    
//     // determine if next number in sequence matches 
//     // the boolean value we define in the variable "increasing"
//     var seq = arr[i] > arr[i - 1];
    
//     // if they do not match, then we know the sequence changes
//     if (seq !== increasing) { return i - 1; }

//   }
  
//   // if no change was detected, then just return -1
//   return -1;
         
         
// }

// console.log(changingSequence([1,2,4,5,4,3]));

// // // ********************* Challenge 32 ************************ //
// // // ******** Overlapping Ranges ********* //

// // // ********************* Challenge 33 ************************ //
// // // ******** Superincreasing ********* //

// // // ********************* Challenge 34 ************************ //
// // // ******** Hamming Distance ********* //
// function HammingDistance(strArr) { 

//   // code goes here  
//   let counter = 0;
//   for(let i = 0; i < strArr.length; i++){
//       for(let j = 0; j < strArr[i].length; j++){
//           if(strArr[0][j] !== strArr[1][j]){
//               counter++;
//           }
//       }
//   }
//   return counter / 2;
         
// }

// console.log(HammingDistance(["helloworld", "worldhello"]));
// console.log(HammingDistance(["10011", "10100"]));

// // // ********************* Challenge 35 ************************ //
// // // ******** Rectange Area ********* //







// function NonrepeatingCharacter(str) { 

//   // code goes here  
//   let arr = str.split('');
//   let obj = {};
  
//   for(let i = 0; i < arr.length; i++){
//       let letter = arr[i];
//       if(obj[letter] == null){
//           obj[letter] = 1;
//       } else {
//           obj[letter] += 1;
//       }
//   }
  
//   var test = {letter: null, count: 2};
  
//   for(let l in obj){
//       if(obj[l] < test['count']){
//           test['count'] = obj[l];
//           test['letter'] = l;
//       }
//   }
  
//   return test['letter'];
// }

// console.log(NonrepeatingCharacter('hello world hi hey'));
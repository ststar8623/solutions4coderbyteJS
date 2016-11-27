// // // ---------------------- CODERBYTE ------------------------- //

// // // ********************* Challenge 1 ************************ //
// // // FIRST REVERSE

// // // Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

// 		function FirstReverse(str){
// 			var string = '';
// 			for(i=str.length-1; i>=0; i--){
// 				string = string + str[i];
// 			}
// 			return string;
			
// 		}

// 		console.log(FirstReverse('arguement goes here'));



// // // ********************* Challenge 2 ************************ //
// // // FIRST FACTORIAL

// // // Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it(e.g. if num=4),
// // // return (4*3*2*1). For the test cases, the range will be between 1 and 18.

// 		function FirstFactorial(num) { 
// 			var number = 1;
// 			for(i=1; i<=num; i++){
// 				number = number * i;
// 			}
// 			return number;         
// 		}

// 		console.log(FirstFactorial(4))



// // // ********************* Challenge 3 ************************ //
// // // LONGEST WORD

// // // Using the JavaScript language, have the function LongestWord(sen) take the sen paramenter being passed and return the largest
// // // word in the string. If there are two or more words that are the same lenght, return the first word from the string with that
// // // lenght. Ignore punctuation and assume sen will not be empty.

// 		function LongestWord(sen) { 
// 			var word = sen.match(/[a-z]+/gi);
// 			return word[0];
// 		}

// 		console.log(LongestWord("Argument goes here ***hellos"));


// // 	// Seond way to solve this challenge //
// 		// function LongestWord(str){

			
// 		// }

// 		console.log(LongestWord('steven leung is okay'));



// // // ********************* Challenge 4 ************************ //
// // // LETTER CHANGES

// // // Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it
// // // using the following algorithm. Replace every letter in the stirng with the letter following in the alphebet. Then capitalize
// // // every vowel in the new string (a, e, i, o, u) and finally return this modified string.

// 		function LetterChanges(str) { 

// 			var converted = str.replace(/[a-z]/gi, function(char){
// 				return char === "z" || char === "Z" ? 'a' : String.fromCharCode(char.charCodeAt()+1);
// 			}).replace(/[aeiou]/, function(vowel){
// 				return vowel.toUpperCase();
// 			})
// 			return converted;
		         
// 		}
		   
// 		console.log(LetterChanges("fun times!"));  



// // // ********************* Challenge 5 ************************ //
// // // SIMPLE ADDING

// // // Have the function SimpleAdding(num) add up al lthe number from 1 to num. The parameter num will be 1 to 1000.

// 		function SimpleAdding(num){
// 			var number = 0;
// 			for(i=1; i<=num; i++){
// 				number += i;
// 			}
// 			return number;
// 		}

// 		console.log(SimpleAdding(50));



// // // ********************* Challenge 6 ************************ //
// // // LETTER CAPITALIZE 

// // // have a function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

// 		function LetterCapitalize(str){
// 			var string = str.split(' ');
// 			for(i=0; i<string.length; i++){
// 				string[i] = string[i].substring(0,1).toUpperCase() + string[i].substring(1);
// 			}
// 			return string;
// 		}

// 		console.log(LetterCapitalize('arguement goes here'));


// // Second way to solve this challenge

// 		// function LetterCapitalize(str) { 
		  
			
		         
// 		// }
		   
// 		console.log(LetterCapitalize("hello world from coderbyte"));  



// // // ********************* Challenge 7 ************************ //
// // // SIMPLE SYMBOLS

// // // Using the JavaScript language, have the function SimpleSymobls(str) take the str paramter being passed and determine if it is an
// // // acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several 
// // // letters between them and for the string to be true each letter must be surrounded by a + symbol.

// 		function SimpleSymbols(str){
// 			str = "=" + str + "=";
// 			for(i=0; i<str.length; i++){

// 				if(str[i].match(/[a-z]/gi)){
// 					if(str[i-1] === '+' && str[i+1] === '+'){
// 						return true;
// 					}
// 				}
// 			}
// 			return false;
			
// 		}

// 		console.log(SimpleSymbols('+d+=3=+s+'));
// 		console.log(SimpleSymbols('dk+=dkkf'));



// // // ********************* Challenge 8 ************************ //
// // // CHECK NUMS

// // // Have a function CheckNums(num1, num2) take both parameters being passed and return the string
// // // true if num2 is greater than num1, otherwise return the string false, if they both equal return string -1.

// 		function CheckNums(num1, num2){
// 			return (num2 === num1) ? '-1' : (num2 > num1) ? true : false;
// 		}

// 		console.log(CheckNums(9, 15));
// 		console.log(CheckNums(9, 9));
// 		console.log(CheckNums(15, 9));



// // // ********************* Challenge 9 ************************ //
// // // TIME CONVERT

// // // have a function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter convert to.

// 		function TimeConvert(num){
// 			return (Math.floor(num/60)) + ":" + (num%60);
// 		}

// 		console.log(TimeConvert(128));



// // // ********************* Challenge 10 ************************ //
// // // ALPHABET SOUP

// // // have a function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical

// 		function AlphabetSoup(str){
// 			return str.toLowerCase().match(/[a-z]/gi).sort().join('')
// 		}

// 		console.log(AlphabetSoup('Steven Leung'))



// // // ********************* Challenge 11 ************************ //
// // // ABCHECK

// // // have a function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by
// // // exactly 3 places anywhere in the string at least once.

// 		function ABCheck(str){
// 			for(i=0; i<str.length; i++){
// 				if(str[i].match(/[a]/gi)){
// 					if(str[i-4] === 'b' || str[i+4] === 'b'){
// 						return true;
// 					}
// 				}
// 				if(str[i].match(/[b]/gi)){
// 					if(str[i-4] === 'a' || str[i+4] === 'a'){
// 						return true;
// 					}
// 				}
// 			}
// 			return false;
// 		}

// 		console.log(ABCheck('aersbkldf'));
// 		console.log(ABCheck('axxxxbxxx'));

// 		// // ----------------------- //
// 		// function ABCheck(str){
			
// 		// }

// 		// // ----------------------- //
// 		// function ABCheck(str){

// 		// }

// 		// // ----------------------- //
// 		// function ABCheck(str){
			
// 		// }



// // // ********************* Challenge 12 ************************ //
// // // VOWEL COUNT

// // // have a function VowelCount(str) take the str string parameter being passed and return
// // // the number of vowels the string contains.

// 		function VowelCount(str){
// 			return str.match(/[aeiou]/gi).length;
// 		}
// 		console.log(VowelCount('steven leung is okay wors'));


// // // ********************* Challenge 13 ************************ //
// // // WORD COUNT

// // // have a function WordCount(str) take the str string parameter being passed and return
// // // number of words the string contains

// 		function WordCount(str){
// 			return str.match(/[a-z]+/gi).length;
// 		}
// 		console.log(WordCount('steven leung is okay wors'));


// // // ********************* Challenge 14 ************************ //
// // // EX OH

// // // have a function Exoh(str) take the str parameter being passed and return the string
// // // true if there is equal number of x's and o's.

// 		function Exoh(str){
// 			var ex = 1;
// 			var oh = 1;
// 			var exoh = str.match(/[xo]/gi);
// 			for(i=0; i<exoh.length; i++){
// 				if(exoh[i] === 'x'){
// 					ex++;
// 				} else {
// 					oh++;
// 				}
// 			}
// 			return ex == oh;

// 		}
// 		console.log(Exoh('xxxaaaooo'));

// 		// Another way //

// 		// function Exoh(str) { 

			
		     
// 		// }

// 		console.log(Exoh("xooox")); 

// 		// Another Way //

// 		// function Exoh(str) { 

			
		 
// 		// }

// 		console.log(Exoh("xooox")); 


// // // ********************* Challenge 15 ************************ //
// // // 

// // // have a function Palindrome(str) take the str parameter being passed and return the string true if the parameter
// // // is a palindrome. (the string is the same forward as it is backward) otherwise return the string false.

// 		function Palindrome(str){
// 			var newstr = str.match(/[a-z]/gi);
// 			var strReverse = newstr.reverse();

// 			return newstr === strReverse;
// 		}

// 		console.log(Palindrome('never odd or even'));

// 		// second way //

// 		// function Palindrome(str){
			
// 		// }

// 		console.log(Palindrome('aeiouoiea'))



// // // ********************* Challenge 16 ************************ //
// // // Arith Geo

// // // have a function ArithGeo(arr) take the array of numbers stored in arr and return the
// // // string 'Arithmetic' if the sequence follows an arithmetic pattern or return 'Geometric'
// // // if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1.

// 		function ArithGeo(arr){
// 			var arith = arr[1] - arr[0];
// 			var geo = arr[1] / arr[0];
// 			var arithcount = 1;
// 			var geocount = 1;

// 			for(i=1; i<arr.length; i++){
// 				if(arr[i+1] - arr[i] === arith){
// 					arithcount++;
// 				}
// 				else if(arr[i+1] / arr[i] === geo){
// 					geocount++;
// 				}
// 				else 
// 					break;
// 			}

// 			return arithcount === arr.length -1 ? 'Arithmetic' : geocount === arr.length-1 ? 'Geometric' : -1;

// 		}

// 		console.log(ArithGeo([1,2,3,4]));
// 		console.log(ArithGeo([1,3,9,27]));
// 		console.log(ArithGeo([1,3,6,9]));


// // // ********************* Challenge 17 ************************ //
// // // 				****** Array Addition I ******				  //
// // // have a function ArrayAdditionI(arr) take the array of numbers stored in arr and return
// // // the string true if any combination of numbers in the array can be added up to equal the
// // // largest number in the array, otherwise return the string false.

// 		function ArrayAdditionI(arr) {
		  
// 		 	var sum = Math.max.apply(null, arr);
// 		 	arr.splice(arr.indexOf(sum), 1);

// 		 	var sets = [[]];

// 		 	for(i=0; i<arr.length; i++){
// 		 		for(j=0, len = sets.length; j<len; j++){
// 		 			var temp = sets[j].concat(arr[i]);
// 		 			sets.push(temp);
// 		 			var s = temp.reduce(function(a,b){
// 		 				return a + b;
// 		 			});
// 		 			if(s==sum){ return 'true'}
// 		 		}
// 		 	}
// 		 	return 'false';
		         
// 		}
// 		console.log(ArrayAdditionI([5,7,16,1,2]));
// 		console.log(ArrayAdditionI([3,5,7,8,15]));
// 		console.log(ArrayAdditionI([1,2,3,100]));


// // // ********************* Challenge 18 ************************ //
// // // ************* LetterCountI ************
// // // have a function LetterCountI(str) take str parameter being passed and return the first word
// // // with the greatest number of repeated letters. if no words with repeating letters return -1.


// 		function LetterCountI(str) { 

// 			var words = str.split(' ');
// 			var table = {};

// 			for(i=0; i<words .length; i++){
// 				var thisword = words[i];
// 				table[thisword] = {};
// 				table[thisword]['highest'] = 0;

// 				for(var j=0; j<words[i].length; j++){
// 					var thischar = thisword[j];
// 					table[thisword][thischar] === undefined ?
// 					table[thisword][thischar] = 1 :
// 					table[thisword][thischar] += 1;

// 					if(table[thisword][thischar] > table[thisword]['highest']){
// 						table[thisword]['highest'] = table[thisword][thischar]
// 					}
// 				}
// 			}

// 			var answer = {word: null, count: 1};

// 			for( w in table){
// 				if(table[w]['highest'] > answer['count']){
// 					answer['count'] = table[w]['highest'];
// 					answer['word'] = w;
// 				}
// 			}

// 			return (answer['count'] === 1) ? -1 : answer['word']

// 		}

// 		console.log(LetterCountI("world hello from coderbyte"));


// // // ********************* Challenge 19 ************************ //
// // // ********* Second GreatLow **********
// // // have a function SecondGreatLow(arr) take the array of numbers stored in arr and 
// // // return the second lowest and greatest numbers

// 		function SecondGreatLow(arr) { 

// 			var number = arr.filter(function(element,index,self){
// 				return self.indexOf(element) === index;
// 			})
// 			var sorted = number.sort(function(a,b){
// 				return a - b;
// 			});

// 			if(sorted.length < 2){
// 				return sorted[0] + " " + sorted[0]
// 			} else {
// 				return sorted[1] + " " + sorted[sorted.length - 2];
// 			}

// 		}
   
// 		console.log(SecondGreatLow([2, 10, 5, 1, -12, 140])); 
// 		console.log(SecondGreatLow([1,42,42,180]));
// 		console.log(SecondGreatLow([4, 90]));
// 		console.log(SecondGreatLow([2,2,2,2]));


// // // ********************* Challenge 20 ************************ //
// // // ******** Division Stringified ********* //
// // // have a function DivisionStringified(num1, num2) take both parameters being passed, divide num1 by num2
// // // and return the result as a string with properly formatted commas. if an answer only 3 digits long,
// // // return the number with no commas. for example: if num1 is 123456789 and num2 is 10000 the output should be "12,346"

// 		function DivisionStringified(num1, num2) { 

			
// 		}

// 		DivisionStringified(1400500, 52); 
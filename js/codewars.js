// function reverse(str) {
// 	// Your code here
//   if(str === ''){
//     return '';
//   } else {
//     return reverse(str.substr(1)) + str.charAt(0);
//   }
// }

// console.log(reverse('steven'));


// function maskify(cc) {
//   var converted = cc.substring(0, cc.length-4).replace(/[0-9]/gi, "#") + cc.substring(cc.length-4, cc.length);
//   return converted;
  
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("123"));

// function middleword(str){

// 	var evenlength = Math.floor(str.length / 2);
// 	var oddlength = evenlength - 1;
// 	var middle = '';

// 	for(i=0; i<str.length; i++){
// 		if(str.length % 2 === 0){
// 			middle = str[oddlength] + str[evenlength];
// 		} else {
// 			middle = str[evenlength];
// 		}
// 	}
// 	return middle;

// }

// console.log(middleword('stevenleung'));

// function tickets(line){

// 	var ticketprice = 25;
// 	var cashier = 0;

// 	for(i=0; i<line.length; i++){

// 		var person = line[i];

// 		if(person == ticketprice){
// 			if(cashier >= 0){
// 				cashier += ticketprice;
// 			} else {
// 				return "NO";
// 			}
// 		} 
// 		else if (person == ticketprice * 2){
// 			if(cashier >= 25){
// 				cashier += line[i] - ticketprice;
// 			} else {
// 				return "NO";
// 			}
// 		}
// 		else if (person == ticketprice * 3){
// 			if(cashier >= 50){
// 				cashier += line[i] - ticketprice * 2;
// 			} else {
// 				return "NO";
// 			}
// 		}
// 		else {
// 			if(cashier >= 75){
// 				cashier += line[i] - ticketprice * 3;
// 			} else {
// 				return "NO";
// 			}
// 		}

// 	}
// 	return "YES";

// }

// console.log(tickets([25,25,75,100,25,25,25,100,25,25,25,100,25,25,50]));


// function highAndLow(numbers){
//   // ...
//   var num = numbers.split(' ');
//   var sorted = num.sort(function(a,b){
//     return a - b;
//   });
//   console.log(sorted);
  
//   return sorted[numbers.length-1] + " " + sorted[0];
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// var merge = function(array1, array2, callback){  
//   	//your code here.

// }

// var x = merge([1, 2, 3, 4], [5, 6, 7, 8], function(a, b){  
//   return a + b;
// });

// console.log(x)

// var euclid = function(coords1, coords2){  
//   	//Your code here.
//   	//You should not use any loops and should
//   	//instead use your original merge function.
//   	var pointOne = coords1, pointTwo = coords2;
//   	var x = pointTwo[0] - pointOne[0];
//   	var y = pointTwo[1] - pointOne[1];

//   	return Math.sqrt((Math.pow(x,2)) + (Math.pow(y,2)));
// }

// var x = euclid([1.2, 3.67], [2.0, 4.4]);

// console.log(x);

// var args = [78,56,232,12,8];

// function findSmallestInt(args) {
//     var arr = Math.min.apply(null, args);
//     var lowest = args.splice(args.indexOf(arr),1);
//     var string = lowest[0];
//     return string;
// }

// console.log(findSmallestInt(args));


// function presses(phrase) {

//   	var key = [['a','d','g','j','m','p','t','w',' ','1'],['b','e','h','k','n','q','u','x','0'],['c','f','i','l','o','r','v','y'],['s','z','2','3','4','5','6','8'],['7','9']];
//   	var press = 0;
//   	for(word in phrase){
//   		for(i=0, x=key.length; i<x; i++){
//   			for(j=0, y=key[i].length; j<y; j++){
//   				if(phrase[word].toLowerCase() === key[i][j]){
//   					press += key.indexOf(key[i]) + 1;

//   				}
//   			}
//   		}
// 	}
//  	return press;
// }

// console.log(presses("LOL"));
// console.log(presses("HOW R U"));

// function presses(phrase) {
//   var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
//       phrase = phrase.toUpperCase().split(''),
//       total = 0;
  
//   phrase.forEach(function(l) {
//     var key = chunks.filter(function(c) {
//       return c.indexOf(l) > -1;
//     })[0];
//     total += key.indexOf(l) + 1;
//   });
  
//   return total;
      
// }

// function presses(phrase) {
//   var sumpress = 0;
//   for (var i = 0; i < phrase.length; i++)
//   {
//     switch (true)
//     {
//       case (/[1adgjmptw\s]/i.test(phrase[i])):
//         sumpress++;
//         break;
//       case (/[behknqux0]/i.test(phrase[i])):
//         sumpress += 2;
//         break;
//       case (/[cfilorvy]/i.test(phrase[i])):
//         sumpress += 3;
//         break;
//       case (/[sz234568]/i.test(phrase[i])):
//         sumpress += 4;
//         break;
//       case (/[79]/.test(phrase[i])):
//         sumpress += 5;
//         break;
//       default:
//         sumpress++;
//         break;
//     }
//   }
//   return sumpress;
// }


// function solution(str){
// 	var arr = str.split(''), returnLetters = [], joinLetters = [], x = arr.length;
// 	if(x%2!==0){
// 		arr.push('_');
// 	}
// 	for(var i = 0; i < x/2; i++){
// 		if(i<x/2-1){
// 			returnLetters += arr.splice(0,1) + arr.splice(0,1) + ",";
// 		} else {
// 			returnLetters += arr.splice(0,1) + arr.splice(0,1);
// 		}
// 	}
// 	joinLetters.push(returnLetters);
// 	return joinLetters;
// }

// console.log(solution('abcde'));
// console.log(solution('steven leung'));

// function solution(str){
//    return (str + "_").match(/.{2}/g); // (/../g)  (/\w{2}/g)
// }

// // Find the next perfect square! //

// function findNextSquare(sq) {
// 	// Return the next square if sq if a perfect square, -1 otherwise
// 	var sqrt = Math.sqrt(sq);
// 	if(Number.isInteger(sqrt)){
// 		return Math.pow(sqrt+1, 2);
// 	}
// 	return -1;
// }

// console.log(findNextSquare(121));
// console.log(findNextSquare(625));
// console.log(findNextSquare(114));

// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }

// Playing with digits //

// function digPow(n, p){
// 	var arr = n.toString(), len = arr.length, total = 0;

// 	for(i=0; i<len; i++){
// 		total += Math.pow(arr[i], i+p);
// 	}
// 	return Number.isInteger(total/arr) ? total/arr : -1;
// }

// console.log(digPow(89, 1));
// console.log(digPow(92, 1));
// console.log(digPow(695, 2));
// console.log(digPow(46288, 3));

// Remove the minimum //
// function removeSmallest(numbers) {
//   var min = Math.min.apply(null, numbers);
//   numbers.splice(numbers.indexOf(min),1);
//   return numbers;
// }

// console.log(removeSmallest([1,2,3,4,5]));
// console.log(removeSmallest([5,3,2,1,4]));
// console.log(removeSmallest([2,2,1,2,1]));

// Square Every Digit //
// function squareDigits(num){
//   //may the code be with you
//   return Number(num.toString().replace(/[0-9]/g, function(sqrt){
//   	return Math.pow(sqrt, 2);
//   }))
// }

// console.log(squareDigits(9119));


// function factorial(n) {
//   return n <= 1 ? 1 : n * factorial(n-1) 
// }

// console.log(factorial(4));

// function reverse(str) {
// 	// Your code here
// 	return (str.length <= 1) ? str : reverse(str.substr(1)) + str.charAt(0);
// }

// console.log(reverse('iloveu'));

// function reverse(str) {
//     return str.length > 1 ? reverse(str.slice(1)) + str[0] : str;
// }

// Unique In Order //
// function uniqueInOrder(str){
// 	let newStr = [];
// 	for(let i = 0, len = str.length; i < len; i++){
// 		if(str[i] !== str[i+1]){
// 			newStr.push(str[i]);
// 		}
// 	}
// 	return newStr;
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder([1,2,2,3,3]));

// Does my number look big in this? //
// function narcissistic( value ) {
// 	let arr = value.toString(), len = arr.length, output = 0;
// 	for(let i = 0; i < len; i++){
// 		output += Math.pow(arr[i], len);
// 	}
// 	return output === value;
// }

// console.log(narcissistic( 371 ));

// function add(n){
// 	var f = function(x){
// 		return add(n+x)
// 	}
// 	f.toString = function(){
// 		return n;
// 	}
// 	return f;

// }
// console.log(add(1)(2)(3));

// GOOD VS EVIL //
// function goodVsEvil(good, evil){
// 	let better = good.split(' '), worst = evil.split(' '), betterTotal = 0, worstTotal = 0;

// 	let tie = 'Battle Result: No victor on this battle field';
// 	let goodWin = 'Battle Result: Good triumphs over Evil';
// 	let evilWin = 'Battle Result: Evil eradicates all trace of Good';

// 	for(let i = 0, len = better.length; i < len; i++){
// 		betterTotal += parseInt(better[i]);
// 	}
// 	for(let j = 0, len = worst.length; j < len; j++){
// 		worstTotal += parseInt(worst[j]);
// 	}
// 	return betterTotal == worstTotal ? tie : betterTotal > worstTotal ? goodWin : evilWin;
// }

// console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'));
// console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'));
// console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'));

// function goodVsEvil(good, evil){

// 	function integer(str){
// 		return parseInt(str);
// 	}

// 	let tie = 'Battle Result: No victor on this battle field';
// 	let goodWin = 'Battle Result: Good triumphs over Evil';
// 	let evilWin = 'Battle Result: Evil eradicates all trace of Good';

// 	let better = good.split(' ' ).map(integer).reduce(function(a,b){return a + b});
// 	let worst = evil.split(' ').map(integer).reduce(function(a,b){return a + b});

// 	return better == worst ? tie : better > worst ? goodWin : evilWin;
// }

// function goodVsEvil(good, evil){
//   var goodTotal = 0;
//   var evilTotal = 0;
//   var goodArr = good.split(" ");
//   var evilArr = evil.split(" ");
  
//   //goodArr.each(function(item) { goodTotal += Number(item); });
//   for(var i = 0; i < goodArr.length; i++){
//     if(i === 0){
//       goodTotal += Number(goodArr[i])
//     }
//     else if(i === 1){
//       goodTotal += (2 * Number(goodArr[i]));
//     }
//     else if(i <= 3 && i >= 2){
//       goodTotal += (3 * Number(goodArr[i]));
//     }
//     else if(i === 4){
//       goodTotal += (4 * Number(goodArr[i]));
//     }
//     else if(i === 5){
//       goodTotal += (10 * Number(goodArr[i]));
//     }
//   }
  
//   //evilArr.each(function(item) { evilTotal += Number(item); });
//   for(var i = 0; i < evilArr.length; i++){
//     if(i === 0){
//       evilTotal += Number(evilArr[i])
//     }
//     else if(i <= 3 && i >= 1){
//       evilTotal += (2 * Number(evilArr[i]));
//     }
//     else if(i === 4){
//       evilTotal += (3 * Number(evilArr[i]));
//     }
//     else if(i === 5){
//       evilTotal += (5 * Number(evilArr[i]));
//     }
//     else if(i === 6){
//       evilTotal += (10 * Number(evilArr[i]));
//     }
//   }
  
//   if(goodTotal > evilTotal){
//     return "Battle Result: Good triumphs over Evil";
//   }
//   else if(evilTotal > goodTotal) {
//     return "Battle Result: Evil eradicates all trace of Good";
//   }
//   else {
//     return "Battle Result: No victor on this battle field";
//   }
// }

// var MORSE_CODE = {
// 		'-.-.--': '!',
// 		'.-..-.': '"',
// 		'...-..-': '$',
// 		'.-...': '&',
// 		'.----.': '\'',
// 		'-.--.': '(',
// 		'-.--.-': ')',
// 		'.-.-.': '+',
// 		'--..--': ',',
// 		'-....-': '-',
// 		'.-.-.-': '.',
// 		'-..-.': '/',
// 		'-----': '0',
// 		'.----': '1',
// 		'..---': '2',
// 		'...--': '3',
// 		'....-': '4',
// 		'.....': '5',
// 		'-....': '6',
// 		'--...': '7',
// 		'---..': '8',
// 		'----.': '9',
// 		'---...': ':',
// 		'-.-.-.': ';',
// 		'-...-': '=',
// 		'..--..': '?',
// 		'.--.-.': '@',
// 		'.-': 'A',
// 		'-...': 'B',
// 		'-.-.': 'C',
// 		'-..': 'D',
// 		'.': 'E',
// 		'..-.': 'F',
// 		'--.': 'G',
// 		'....': 'H',
// 		'..': 'I',
// 		'.---': 'J',
// 		'-.-': 'K',
// 		'.-..': 'L',
// 		'--': 'M',
// 		'-.': 'N',
// 		'---': 'O',
// 		'.--.': 'P',
// 		'--.-': 'Q',
// 		'.-.': 'R',
// 		'...': 'S',
// 		'-': 'T',
// 		'..-': 'U',
// 		'...-': 'V',
// 		'.--': 'W',
// 		'-..-': 'X',
// 		'-.--': 'Y',
// 		'--..': 'Z',
// 		'..--.-': '_',
// 		'...---...': 'SOS'
// }

// decodeMorse = function(morseCode){
//   function decodeMorseLetter(letter) {
//     return MORSE_CODE[letter];
//   }
//   function decodeMorseWord(word) {
//     return word.split(' ').map(decodeMorseLetter).join('');
//   }
//   return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
// }

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

// function likes(names) {
//   // TODO
//   var likes = ' like this';
//   if(names.length == 0){
//     return 'no one likes this';
//   } else if (names.length == 1){
//     return names + ' likes this';
//   } else if (names.length == 2){
//     return names[0] + ' and ' + names[1] + likes;
//   } else if (names.length == 3){
//     return names[0] + ', ' + names[1] + ' and ' + names[2] + likes;
//   } else {
//     return names[0] + ', ' + names[1] + ' and ' + (names.length-2) + ' others like this';
//   }
// }

// console.log(likes(['Steven', 'Kenly', 'Cathy', 'Marco', 'Ringo']))

// function likes(names) {
//   names.length === 0 && (names = ["no one"]);
//   let [a, b, c, ...others] = names;
//   switch (names.length) {
//     case 1: return `${a} likes this`;
//     case 2: return `${a} and ${b} like this`;
//     case 3: return `${a}, ${b} and ${c} like this`;
//     default: return `${a}, ${b} and ${others.length + 1} others like this`;
//   }
// }

// function zeros (n) {
//   let total = 1, zero = 0;
//   for(i=1; i < n; i++){
//     total += total * i;
//   }
//   let arr = total.toString().split('');
//   console.log(arr);
//   for(j= arr.length; j >= 0; j--){
//   	if(arr[j] == 0){
//   		zero++;
//   		if(arr[j-1] == 0){
//   			zero++;
//   			break;
//   		}
//   	}
//   }
//   return zero;
// }

// console.log(zeros(15));

// var steven = {};
// function storeGF(number, gf){
// 	steven[number] = gf;
// }

// storeGF(1, 'miranda');
// storeGF(2, 'fiona');
// storeGF(3, 'stephanie');
// console.log(steven);

// for(gf in steven){
// 	console.log(steven[gf]);
// }

// console.log([0,1,2,3,4].slice(2,4));
// console.log('fuck you'.slice(5).concat(('fuck you').slice(0,4)).concat('ME'));

// function anagrams(word, words) {
// 	let arr = word.split('');
// 	let sorted = arr.sort().join('');
// 	let sortWords = [];
// 	for(i=0; i<words.length; i++){
// 		if(sorted == words[i].split('').sort().join('')){
// 			sortWords.push(words[i]);
// 		}
		
// 	}
// 	return sortWords;
	
// }

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));

function rowSumOddNumbers(n){
	var output = 1;
	for(var i = 1; i < n; i++){
		output += i*2;
	}
	output *= n-1;

	for(var j = 1; j < n; j++){
		output += i*2;
	}
	return output+1
}

console.log(rowSumOddNumbers(42));











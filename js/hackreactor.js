// var ancestry = [
//   {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
//   {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
//   {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
//   {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
//   {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
//   {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
//   {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
//   {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
//   {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
//   {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
//   {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
//   {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
//   {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
//   {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
//   {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
//   {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
//   {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
//   {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
//   {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
//   {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
//   {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
//   {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
//   {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
//   {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
//   {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
//   {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
//   {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
//   {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
//   {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
//   {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
//   {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
//   {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
//   {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
// ];

// // CHAPTER 2

// 		// var x = "";
// 		// for(i=0; i < 7; i++){
// 		// 	x += "#";
// 		// 	console.log(x)
// 		// }


// 		// for(i=1; i <= 100; i++){

// 		// 	if(i%3 === 0 && i%5 === 0){
// 		// 		console.log("fizzbuzz")
// 		// 	} 
// 		// 	else if (i%3 === 0){
// 		// 		console.log("fizz")
// 		// 	} 
// 		// 	else if (i%5 === 0){
// 		// 		console.log("buzz")
// 		// 	} 
// 		// 	else {
// 		// 		console.log(i)
// 		// 	}
// 		// }

// // *** Chess board *** //

// 		// var size = 8;
// 		// var board = "";

// 		// for(x=0; x<size; x++){
// 		// 	for(y=0; y<size; y++){
// 		// 		if((x + y) % 2 == 0){
// 		// 			board += " ";
// 		// 		} else {
// 		// 			board += "#";
// 		// 		}
// 		// 	}
// 		// 	board += "\n";
// 		// };

// 		// console.log(board)

// // CHAPTER 3 //
// // *** Minimum *** //

// 		// var min = function(num1, num2){
// 		// 	if(num1 > num2){
// 		// 		return num2
// 		// 	} else {
// 		// 		return num1
// 		// 	}
// 		// }

// 		// console.log(min(8,9))

// 		// function power(base, exponent){
// 		// 	if(exponent == undefined)
// 		// 		exponent = 2;
// 		// 		var result = 1;
// 		// 	for(i=0; i<exponent; i++)
// 		// 		result *= base;
// 		// 		return result;
// 		// }

// 		// console.log(power(10, 4));

// // *** Recursion *** //

// 		// function isEven(num){
// 		// 	if(num % 2 == 0) {
// 		// 		return true
// 		// 	} else {
// 		// 		return false
// 		// 	}
// 		// }

// 		// console.log(isEven(0));
// 		// console.log(isEven(50));
// 		// console.log(isEven(75));
// 		// console.log(isEven(-9));
// 		// console.log(isEven(-8));

// // *** Been counting *** //

// 		// function countBs(string){
// 		// 	var x = 0;
// 		// 	for(i=0; i<string.length; i++){
// 		// 		if(string[i] === "B"){
// 		// 			x += 1;
// 		// 		}
// 		// 	}
// 		// 	return x
// 		// }

// 		// console.log(countBs('BBC'));

// 		// function countChar(string, character){
// 		// 	var x = 0;
// 		// 	for(i=0; i<string.length; i++){
// 		// 		if(string[i] === character){
// 		// 			x += 1;
// 		// 		}
// 		// 	}
// 		// 	return x
// 		// }

// 		// console.log(countChar('kakkerlak', 'k'));

// // *** CHAPTER 4 *** //
// // *** The sum of a range ** //

// 		// function range(start, end){
// 		// 	var array = [];
// 		// 	for(i=start; i<=end; i++){
// 		// 		array.push(i)
// 		// 	}
// 		// 	return array;
// 		// }

// 		// console.log(range(1, 10));

// 		// function sum(start, end){
// 		// 	var array = 0;
// 		// 	for(i=start; i<=end; i++){
// 		// 		array += i;
// 		// 	}
// 		// 	return array;
// 		// }

// 		// console.log(sum(1, 10));

// 		// function range2(start, end, step){
// 		// 	var array = [];
// 		// 	if(step === undefined){
// 		// 		step = 1;
// 		// 		return step;
// 		// 	}
// 		// 	for(i=start; i<=end; i++){
// 		// 		if(i % step == true){
// 		// 			array.push(i)
// 		// 		}
// 		// 	}	
// 		// 	for(i=start; i>=end; i--){
// 		// 		if(i % step == false){
// 		// 			array.push(i)
// 		// 		}
// 		// 	}
// 		// 	return array;
// 		// }

// 		// console.log(range2(1, 10, 2));
// 		// console.log(range2(5, 2, -1));


// // *** Reversing an array *** //

// 		// function reverseArray(array){
// 		// 	array2 = [];
// 		// 	for(i=array.length - 1; i>=0; i--){
// 		// 		array2.push(array[i]);
// 		// 	}
// 		// 	return array2;
// 		// }

// 		// console.log(reverseArray(["A", "B", "C"]));

// 		// function reverseArrayInPlace(arrayValue){
// 		// 	arrayValue2 = [];
// 		// 	for(i=arrayValue.length; i>=0; i--){
// 		// 		arrayValue2.push(arrayValue[i]);
// 		// 	}
// 		// 	return arrayValue2;
// 		// }

// 		// var arrayValue = [1, 2, 3, 4, 5];
// 		// reverseArrayInPlace(arrayValue);
// 		// console.log(arrayValue);

// 		// function remove(array, index){
// 		// 	return array.slice(0, index).concat(array.slice(index + 1));
// 		// }

// 		// console.log(remove(['a','b','c','d','e'], 2));


// // *** A LIST *** //

		// function arrayToList(array){
		// 	var list = null;
		// 	for(i=array.length - 1; i>=0; i--) {
		// 		list = {value: array[i], rest: list};
		// 	}
		// 	return list;
		// }

		// console.log(arrayToList([10, 20]));

// 		// function listToArray(list){
// 		// 	var array = [];
// 		// 	for(var node = list; node; node = node.rest){
// 		// 		array.push(node.value)
// 		// 	}
// 		// 	return array;
// 		// }

// 		// console.log(listToArray(arrayToList([10, 20, 30])));

// 		// function prepend(value, list){
// 		// 	return {value: value, rest: list};
// 		// }

// 		// console.log(prepend(10, prepend(20, null)));

// 		// function nth(list, n){
// 		// 	if(!list)
// 		// 		return undefined;
// 		// 	else if (n == 0)
// 		// 		return list.value;
// 		// 	else
// 		// 		return nth(list.rest, n-1);
// 		// }

// 		// console.log(arrayToList([10,20,30]));

// 		// console.log(nth(arrayToList([10, 20, 30]), 1));


// // *** Deep Comparsion *** //

// 		// var obj = {here: {is: "an"}, object: 2};

// 		// function deepEqual(a, b) {
// 		// 	if (a === b) return true;

// 		// 	if (a == null || typeof a != "object" ||
// 		// 	b == null || typeof b != "object")
// 		// 	return false;

// 		// 	var propsInA = 0, propsInB = 0;

// 		// 	for (var prop in a)
// 		// 	propsInA += 1;

// 		// 	for (var prop in b) {
// 		// 	propsInB += 1;
// 		// 		if (!(prop in a) || !deepEqual(a[prop], b[prop]))
// 		// 		return false;
// 		// 	}
// 		// 	return propsInA == propsInB;
// 		// }


// 		// console.log(deepEqual(obj, obj));

// 		// console.log(deepEqual(obj, {here: 1, object: 2}));

// 		// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// // CHAPTER 5 //

// 		// function average(array){
// 		// 	function plus(a,b) { return a + b }
// 		// 	return array.reduce(plus) / array.length;
// 		// }
// 		// function age(p) { return p.died - p.born; }
// 		// function male(p) { return p.sex == 'm'; }
// 		// function female(p) { return p.sex == 'f'; }

// 		// console.log(average(ancestry.filter(male).map(age)));
// 		// console.log(average(ancestry.filter(female).map(age)));

// // *** Flattening *** //

// 		var arrays = [[1,2,3],[4,5],[6]];

// 		var arr = arrays.reduce(function(newarray, arrays){
// 			return newarray.concat(arrays);
// 		});

// 		console.log(arr);
// 		// -> [1,2,3,4,5,6]

// 		// console.log(arrays.reduce(function(newarray, arrays){
// 		// 	return newarray.concat(arrays);
// 		// }, []))

// // *** Mother-child age difference *** //

// 		function average(array){
// 			function plus(a,b){ return a+b; }
// 			return array.reduce(plus) / array.length;
// 		}

// 		var byName = {};
// 		// ancestry refers to eloquent inner json //
// 		ancestry.forEach(function(person){
// 			byName[person.name] = person;
// 		});

// 		var differences = ancestry.filter(function(person){
// 			return byName[person.mother] != null;
// 		}).map(function(person){
// 			return person.born - byName[person.mother].born;
// 		});

// 		console.log(average(differences));

// // *** Historical life expectancy *** //

// 		function average(array){
// 			function plus(a,b){return a + b;};
// 			return array.reduce(plus) / array.length;
// 		}

// 		function groupBy(array, groupOf){
// 			var groups = {};
// 			array.forEach(function(element){
// 				var groupName = groupOf(element);
// 				if(groupName in groups)
// 					groups[groupName].push(element);
// 				else
// 					groups[groupName] = [element];
// 			})
// 			return groups;
// 		}

// 		var byCentury = groupBy(ancestry, function(person){
// 			return Math.ceil(person.died / 100);
// 		})
// 		console.log(byCentury);

// 		for(var century in byCentury){
// 			var ages = byCentury[century].map(function(person){
// 				return person.died - person.born;
// 			})
// 			console.log(century + ": " + average(ages));
// 		}

// // *** Every and then Some *** //
	
// 		function every(array, prediction){
// 			for(i=0; i<array.length; i++){
// 				if(!prediction(array[i]))
// 					// loop through array if all element is not equal to prediction
// 					return false;
// 			}
// 			return true;
// 		}

// 		function some(array, prediction){
// 			for(i=0; i<array.length; i++){
// 				if(prediction(array[i]))
// 					// loop through array if first element is equal to prediction, immediate return true
// 					return true;
// 			}
// 			return false;
// 		}

// 		console.log(every([NaN, NaN, NaN], isNaN));
// 		console.log(every([NaN, NaN, 4], isNaN));
// 		console.log(some([NaN, 3, 4], isNaN));
// 		console.log(some([2,3,4], isNaN));

// function range(start, end, step){
// 	if(step == null)step = 1;
// 	let sum = [];
// 	if(step > 0){
// 		for(i=start; i<=end; i+= step){
// 			sum.push(i);
// 		}
// 	} else {
// 		for(i=start; i>=end; i+= step){
// 			sum.push(i);
// 		}
// 	}
// 	return sum;
// }

// function sum(array){
// 	let total = 0;
// 	for(i=0; i<array.length; i++){
// 		total += array[i];
// 	}
// 	return total;
// }

// console.log(range(1, 10, 3));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(12, 2, -2));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55

// function reverseArray(array){
//   	var arr = [];
//   	for(let i = array.length - 1; i >= 0; i--){
//   		arr.push(array[i]);
//   	}
//   	return arr;
// }

// function reverseArrayInPlace(array){
// 	for(let i = 0; i < Math.floor(array.length / 2); i++){
// 		var temp = array[i];
// 		array[i] = array[array.length - 1 - i];
// 		array[array.length - 1 - i] = temp;
// 	}
// 	return array;
// }

// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// var arrayValue = [1, 2, 3, 4, 5];
// console.log(reverseArrayInPlace(arrayValue));
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// var arr = [
// 	['Steven', 'Leung', '30', 'HongKong'],
// 	['Andy', 'Leung', '33', 'HongKong'],
// 	['David', 'Cheng', '30', 'USA'],
// 	['Yuk Sim', 'Young', '60', 'China']
// ];

// var obj = arr.reduce(function(person, line){

// 	person[line[0]] = person[line[0]] || []
// 	person[line[0]].push({
// 		firstName: line[0],
// 		lastName: line[1],
// 		age: line[2],
// 		born: line[3]
// 	})
// 	return person;
// }, {})

// console.log(JSON.stringify(obj, null, 2));

// return lists.map(function(list){
//     return {
//       name: list.name,
//       videos: videos.filter(function(video){
//         return video.listId === list.id;
//       }).concatMap(function(video){
//         return Array.zip(bookmarks.filter(function(bookmark){
//           return bookmark.videoId === video.id;
//         }), boxarts.filter(function(boxart){
//           return boxart.videoId === video.id;
//         }).reduce(function(acc, curr){
//           return acc.width * acc.height < curr.width * curr.height ? acc : curr;
//         }), function(bookmark, boxart){
//           return { id: video.id, title: video.title, time: bookmark.time, boxart: boxart.url}
//         });
//       })
//     };
//   });

// var reverse = function(x) {
//     var rev = Number(Math.abs(x).toString().split('').reverse().join(''));
//     if(x > 0){
//         return rev;
//     } else {
//         return rev * -1;
//     }
// };

// console.log(reverse(123));
// console.log(reverse(-123));

// var intToRoman = function(num) {
//     var map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
    
//     var roman = '';
//     for(let n in map){
//         while( num >= map[n]){
//             roman += n;
//             num -= map[n];
//         }
//     }
//     return roman;
    
// };

// console.log(intToRoman(1234));

// var numberToWords = function(num) {
    
// 	let words = { ninety: 90, eighty: 80, seventy: 70, sixty: 60, fifty: 50, fourty: 40, thirty: 30, twenty: 20, nineteen: 19, eighteen: 18, seventeen: 17, sixteen: 16, fifteen: 15, fourteen: 14, thirteen: 13, twelve: 12, eleven: 11, ten: 10, nine: 9, eight: 8, seven: 7, six: 6, five: 5, four: 4, three: 3, two: 2, one: 1 }

// 	let output = '';
// 	for(let w in words){
// 		while(num > words[w]){
// 			output += w;
// 			num -= words[w];
// 		}
// 	}
// 	return output;	
			
// }

// console.log(numberToWords(1234));

// var arr = [1,2,3,4,5];

// function multiplyTwo(num){
// 	return num * 2;
// }

// var obj = {};

// for(i=0; i<arr.length; i++){
// 	var key = arr[i].toString();
// 	var value = multiplyTwo(arr[i]);
// 	obj[key] = value;
// }
// console.log(obj);











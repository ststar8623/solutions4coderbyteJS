// function allanagrams(word){
// 	if(word.length < 2){
// 		return [word];
// 	} else {
// 		var allanswers = [];
// 		for(var i =0; i < word.length; i++){
// 			var letter = word[i];
// 			var shorterword = word.substr(0, i) + word.substr(i+1, word.length-1);
// 			// console.log(shorterword);
// 			var shortwordarray = allanagrams(shorterword);
// 			// console.log(shortwordarray);
// 			for (var j = 0; j < shortwordarray.length; j++){
// 				allanswers.push(letter + shortwordarray[j]);
// 			}
// 		}
// 		return allanswers;
// 	}
// }

// console.log(allanagrams('12345'));


// function measureLoopSpeed() {
//   var count = 0
//   function addOne() { count = count + 1 }

//   // Date.now() returns a big number representing the number of
//   // milliseconds that have elapsed since Jan 01 1970
//   var now = Date.now()

//   // Loop until Date.now() is 1000 milliseconds (1 second) or more into
//   // the future from when we started looping. On each loop, call addOne
//   while (Date.now() - now < 1000) addOne()

//   // Finally it has been >= 1000ms, so let's print out our total count
//   console.log(count)
// }

// console.log(measureLoopSpeed())



// function filter_list(l){
// 	var arr = [];
// 	for(i=0; i<l.length; i++){
// 		var list = l[i];
// 		if(typeof(list) === 'number'){
// 			arr.push(list);
// 		}
// 	}
// 	return arr;
// }

// console.log(filter_list([1,2,'a','b']));

// var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];

// var lighthouseRock = {
//   gateClosed: true,
//   weaponBulbs: superBlinders,
//   capacity: 30,
//   secretPassageTo: "Underwater Outpost",
//   numRangers: 3,
//   ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
//   ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
//   ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
// };

// function dontPanic(location) {
//   var list = "Avast, me hearties!\n" +
//              "There be Pirates nearby! Stations!\n";

//   // loop through the rangers and append to list
//   for(var i=1; i<=location.numRangers; i++){
//   	var ranger = location['ranger'+i];
//     var name = ranger.name;
//     var superBlinder = location.weaponBulbs[ranger.station-1][0];
//     list += name + ", man the " + superBlinder + "!\n";
//   }

//   console.log(list);
// }

// dontPanic(lighthouseRock);

// ************ SPEED TEST *********** //
// function SpeedTest(testImplement, testParams, repetitions){
// 	this.testImplement = testImplement;
// 	this.testParams = testParams;
// 	this.repetitions = repetitions || 10000;
// 	this.average = 0;
// }

// SpeedTest.prototype = {
// 	startTest: function(){
// 		var beginTime, endTime, sumTimes = 0;
// 		for(var i = 0, x = this.repetitions; i < x; i++){
// 			beingTime = +new Date();
// 			this.testImplement( this.testParams );
// 			endTime = +new Date();
// 			sumTimes += endTime - beginTime;
// 		}
// 		this.average = sumTimes / this.repetitions;
// 		return console.log("Average execution across " + this.repetitions + ": " + this.average);
// 	}
// }

// function Knight(name, regiment){
// 	this.name = name;
// 	this.regiment = regiment;
// 	switch(regiment){
// 		case 1:
// 			this.weapons = '123';
// 			break;
// 		case 2:
// 			this.weapons = '234';
// 			break;
// 		default:
// 			alert(name);
// 	}
// }

// var firstRegimentNewbs = ['Grimble Horsehead', 'Jark Winterborn', 'Bunder Ropefist', 'Ernest Breadbaker'];
// var firstRegimentKnights = [];
// var listsForTests = [firstRegimentNewbs, firstRegimentKnights];

// var BP = function(listOfParams){
// 	for(var i=0; i<listOfParams[0].length; i++){
// 		listOfParams[1].push(new Knight(listOfParams[0][i], 1));
// 	}
// };

// var BPtest = new SpeedTest(BP, listsForTests);
// BPtest.startTest();

// var a = ["John", 
//  "Martin"];
// var b = [false, false];
// var c = [1, 2];
// var d = [6, 6];

// function smartAssigning(names, statuses, projects, tasks) {
//     var name = names;
//     var status = statuses;
//     var project = projects;
//     var task = tasks;
    
//     for(var i = 0; i < name.length; i++){
//         if(status[i] === true){
//             name.splice(i,1);
//             status.splice(i,1);
//             project.splice(i,1);
//             task.splice(i,1);
//         }
//     }
    
//     if(name.length === 1){
//         return name[0];
//     }
    
//     if(name.length > 1){
//         var counter;
//         var arr = [];
//         for(var j = 0; j < name.length; j++){
//             var workload = project[j] + task[j];
//             arr.push(workload);
//         }
//         console.log(arr);

//         for(var k = 1; k < arr.length; k++){
//         	var test = arr[0];
//         	if(arr[k] < test){
//         		test = k;
//         	} else if (arr[k] > test){
//         		test = k-1;
//         	} else {
//         		test = k;
//         	}
//         	console.log(test);
//         	counter = test;
//         }    
//         return name[counter];
//     }
// }

// console.log(smartAssigning(a, b, c, d))


// function lateRide(n) {
//     var minutes = n%60;
//     var hours = (n - minutes) / 60;
    
//     var times = hours + '' + minutes;
//     times.toString().split('');

//     var answer = 0;
//     for(var i = 0; i < times.length; i++){
//         answer += Number(times[i]);
//     }
//     return answer;
// }

// console.log(lateRide(808));

// function phoneCall(min1, min2_10, min11, s){
	
// 	var counter = 0;
// 	var min2 = 9;
// 	if(s < min1){
// 		return 0;
// 	} else if (s === min1){
// 		return 1;
// 	} else {
// 		if(s > min1){
// 			s -= min1;
// 			counter++;
// 		}
// 		while(min2 > 0){
// 			if(s > min2_10){
// 				counter++;
// 				s -= min2_10;
// 			}
// 			min2--;
// 			if(min2 === 0 && counter >= 10){
// 				while(s >= min11){
// 					s -= min11;
// 					counter++;
// 				}
// 			}
// 		}
// 	}
// 	return counter;
// }

// console.log(phoneCall(1,2,1,6));


// function killKthBit(n, k) {
//  	return parseInt(n.toString(2).replace(1, function(x){
//  		return x = 0;
//  	}), 2);
// }

// console.log(killKthBit(37, 3));

// function arrayPacking(a){
// 	var m = [];
// 	for(var i = a.length-1 ; i>= 0; i--){
// 		m.push(a[i].toString(2));
// 	}
// 	for(var j = 0; j<m.length; j++){
// 		while(m[j].length < 8){
// 			m[j] = '0' + m[j];
// 		}
// 	}
// 	var n = m.join('');
// 	return parseInt(n, 2);
// }

// console.log(arrayPacking([24, 85, 0]));

// function rangeBitCount(a,b){
// 	var arr = [];

// 	while(a <= b){
// 		arr.push(a);
// 		a++;
// 	}
// 	var bitarr = arr.map(function(num){
// 		return num.toString(2);
// 	})

// 	var counter = 0;
// 	for(var i = 0; i<bitarr.length; i++){
// 		for(var j = 0; j<bitarr[i].length; j++){
// 			if(bitarr[i][j] === '1'){
// 				counter++;
// 			}
// 		}
// 	}
// 	return counter;
// }

// console.log(rangeBitCount(2, 7));

// function secondRightmostZeroBit(n){
// 	return (~((n+1) | n)) & (((n+1)|n)+1);
// }

// console.log(secondRightmostZeroBit(37));

// function leastFactorial(n){
// 	var output = 1;
// 	var i = 0;
// 	while(output < n){
// 		i++;
// 		output *= i;
// 	}
// 	return output;
// }

// console.log(leastFactorial(17));

// function countSumOfTwoRepresentations2(n, l, r) {
//     if(n < 2 * l || n > 2 * r){
//     	return 0;
//     }
//     var end = n >= r ? r : n;
//     var start = n - end;
//     if(start <= l){
//     	start = l;
//     	end = n - start;
//     }
//     return Math.floor((end - start) / 2 +1);
// }

// console.log(countSumOfTwoRepresentations2(93,24,58));

// function lineUp(commands){
// 	if(commands.length <= 1){
// 		if(commands === "A"){
// 			return 1;
// 		} else {
// 			return 0;
// 		}
// 	}
// 	var counter = true;
// 	var count = 0;
	
// 	for(var i = 0; i < commands.length; i++){
// 		if(commands[i] === "A"){
// 			counter = true;
// 			if(commands[i+1] === "L" || "R"){
// 				counter = false;
// 			} else {
// 				counter = true;
// 				count++;
// 			}
// 		}
// 	}
// 	return counter;
// }

// console.log(lineUp("RLR"));























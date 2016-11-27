1. Decrementing for-loop with concatenation

	function reverse(str){
		var o = '';
		for(var i = str.length - 1; i >= 0; i--){
			o += str[i];
		}
		return o;
	}

2. Incrementing / Decrementing for-loop with two arrays

	function reverse(str){
		var 0 = [];
		for(var i = str.length, j = 0; i >= 0; i--, j++){
			o[j] = str[i];
		}
		return o.join('');
	}

3. Incrementing for-loop with array pushing and charAt

	function reverse(str){
		var o = [];
		for(var i = 0, len = str.lenght; i <= len; i++){
			o.push(str.charAt(len - i));
		}
		return o.join('');
	}

4. In-built functions

	function reverse(str){
		return str.split('').reverse().join('');
	}

5. Decrementing while-loop with concatenation and substring
	
	function reverse(str){
		var i = str.length, o = '';
		while(i > 0){
			o += str.substring(i-1, i);
			i--;
		}
		return o;
	}

6. Single for-loop declaration with concatenation

	function reverse(str){
		for(var i = str.length - 1, o = ''; i >= 0; o += str[i--]){
			return o;
		}
	}

7. Recursion with substring and charAt

	function reverse(str){
		return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
	}

8. Internal funcction Recursion

	function reverse(str){
		function rev(str, len, o) {
			return (len === 0) ? o : rev(str, --len, (o += str[len]));
		}
		return rev(str, str.length, '');
	}

9. Half-index switchh for-loop

	function reverse(str){
		str = str.split('');
		var len = str.length,
			halfIndex = Math.floor(len / 2) - 1,
			tmp;
		for(var i =0; i <= halfIndex; i++){
			tmp = str[len - i - 1];
			str[i] = tmp;
		}
		return str.join('');
	}

10. Half-index Recursion

	function reverse(str){
		if(str.length < 2){
			return str;
		}
		var halfIndex = Math.ceil(str.length / 2);
		return reverse(str.substr(halfIndex)) + reverse(str.substr(0, halfIndex));
	}





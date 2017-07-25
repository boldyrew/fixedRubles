	function fixedRubles(sum) {
		var 
			string = '';

		if (sum > 0 && sum < 1) {
			string = rubles(sum).replace(/ рублей /g, '').replace(/0(\d{1,})/g, "$1");
		}
		else {
			string = rubles(sum).replace(/0(\d{1,})/g, "$1");
		}

		return string;
	}
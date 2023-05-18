        var name = '';
		var birthYear = '';
		var age = '';

		var nameValid = false;
		var birthYearValid = false;
		var x = 0;
		var y = 0;

		while (!nameValid && x < 3) {
			name = prompt("enter your name:");

			if (typeof name === 'string') {
				nameValid = true;
			} else {
				x++;
			}
		}
		while (!birthYearValid && y < 3) {
			birthYear = prompt("enter your birth year");

			if (!isNaN(birthYear) && birthYear < 2010) {
				
				age=2023-birthYear;
				birthYearValid = true;
			} else {
				y++;
			}
		}
		document.write("Name: " + name + "<br>");
		document.write("Birth Year: " + birthYear + "<br>");
		document.write("Age: " + age + "<br>");
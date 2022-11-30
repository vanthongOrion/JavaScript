function caclAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}


var name = prompt("Enter your name: ");
var yearBorn = prompt("Enter the year you born: ");

console.log(caclAge(yearBorn));
// console.log(result);

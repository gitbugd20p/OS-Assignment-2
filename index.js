// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

let calculateDifference = (numberOne, NumberTwo) => {
    let difference = Math.abs(numberOne - NumberTwo);
    return difference;
};

let diff = calculateDifference(5, 10);
console.log(diff);


// ================================================
// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(number){
	if(number % 2 == 1)
		return true;
	else
		return false;
}

let isOddOrNot = isOdd(7);
console.log(isOddOrNot);


// ================================================
// 3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(numberArr){
	let small = 1000000000;
	
	numberArr.forEach(number => {
		if(number < small){
			small = number;
		}
	});
	return small;
}

let anArr = [1, 10, 5, 9, 3, 6, 5, 7, 8, 4, 2];
let findOutSmall = findMin(anArr);
console.log(findOutSmall);


// ================================================
// 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numberArr){
	let newEvenArr = numberArr.filter(number => number % 2 === 0);
	return newEvenArr;
}

let numberArr2 = [1, 10, 5, 9, 3, 6, 5, 7, 8, 4, 2];
let resArr = filterEvenNumbers(numberArr2);
console.log(resArr);


// ================================================
// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numberArr){
	let newSortedArr = numberArr.sort((a, b) => b - a);
	return newSortedArr;
}

let numberArr3 = [1, 10, 5, 9, 3, 6, 5, 7, 8, 4, 2];
let resSortArr = sortArrayDescending(numberArr3);
console.log(resSortArr);


// ================================================
// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str){
	let newStr = str[0].toLowerCase();
	newStr += str.slice(1);
	return newStr;
}

const str = "Hello world";
let newStr = lowercaseFirstLetter(str);
console.log(newStr);


// ================================================
// 7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numberArr){
	let numberArrLength = numberArr.length;
	if(numberArrLength === 0)
		return 0;
	let sum = 0;
	numberArr.forEach(number => {
		sum += number;
	});

	return sum / numberArrLength;
}

let numberArr = [1, 10, 5, 9, 3, 6, 5, 7, 8, 4, 2];
let avg = findAverage(numberArr);
console.log(avg);


// ================================================
// 8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

let isLeapYear = (year) =>{
	if(year % 400 == 0)
		return true;
	else if(year % 100 == 0)
		return false;
	else if(year % 4 == 0)
		return true;
	else
		return false;
}

let year = 2024;
let checkYear = isLeapYear(year);

if(checkYear)
	console.log(`${year} is a leap year.`);
else
	console.log(`${year} is not a leap year.`);


// ================================================
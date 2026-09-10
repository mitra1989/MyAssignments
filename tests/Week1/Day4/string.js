function reverseString(input) {
	const characters = input.split("");
	let reversedString = "";
	for (let index = characters.length - 1; index >= 0; index--) {
		reversedString += characters[index];
	}
	return reversedString;
}

function isPalindrome(input) {
	return input === reverseString(input);
}

const testStrings = ["hello", "level", "madam"];

for (let index = 0; index < testStrings.length; index++) {
	const testString = testStrings[index];
	const reversedString = reverseString(testString);
	console.log("Original:", testString);
	console.log("Reversed:", reversedString);
	console.log("Palindrome:", isPalindrome(testString));
}

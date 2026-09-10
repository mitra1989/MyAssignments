//Task 1
function userProfile(name) {
	console.log(`Hello, ${name}!`);
}
userProfile("Mitra");

//Task 2
const double = (number) => number * 2;
console.log(double(5));

//Task 3
setTimeout(function () {
	console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4
function getUserData(callback) {
	setTimeout(function () {
		callback("Call Back Function");
	}, 3000);
}

getUserData(function (message) {
	console.log(message);
});



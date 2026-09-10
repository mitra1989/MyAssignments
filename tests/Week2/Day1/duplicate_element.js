let num = [56, 78, 90, 23, 90, 76, 43, 56];

for (let firstIndex = 0; firstIndex < num.length; firstIndex++) {
	for (let secondIndex = firstIndex + 1; secondIndex < num.length; secondIndex++) {
		if (num[firstIndex] === num[secondIndex]) {
			console.log("Duplicate:", num[firstIndex]);
		}
	}
}

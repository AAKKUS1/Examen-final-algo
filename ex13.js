function genererTableau(n) {
	let newTab = [];
	let counter = 0;
	for (let i = 0; i < n + 1; i++) {
		newTab.push(counter);
		counter++;
	}
	return newTab;
}
console.log(genererTableau(4)); // Résultat attendu : [0, 1, 2, 3, 4]

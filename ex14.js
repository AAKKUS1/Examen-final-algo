function sontAnagrammes(a, b) {
	let anagramme = true;
	let counter = 0;
	for (let i = 0; i < b.length; i++) {
		if (a.includes(b[i])) {
			counter++;
		} else {
		}
		if (b.length === a.length && counter === a.length) {
			anagramme = true;
		} else {
			anagramme = false;
		}
	}

	return anagramme;
}
console.log(sontAnagrammes("chien", "niche")); // Résultat attendu : true
console.log(sontAnagrammes("bonjour", "jourbon")); // Résultat attendu : true
console.log(sontAnagrammes("bonjour", "bonsoir")); // Résultat attendu : false

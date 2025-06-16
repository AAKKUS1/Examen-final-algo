function motLePlusLong(phrase) {
	const words = phrase.split(" ");
	let longestWord = words[0];
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > longestWord.length) {
			longestWord = words[i];
		}
	}
    return longestWord;
}
console.log(motLePlusLong("Bonjour à tous et bienvenue")); // Résultat attendu : "bienvenue"

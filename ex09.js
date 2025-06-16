function supprimerDoublons(tab) {
	let newTab = [];
	for (let i = 0; i < tab.length; i++) {
		if (newTab.includes(tab[i])) {
		} else {
			newTab.push(tab[i]);
		}
	}
	return newTab;
}
console.log(supprimerDoublons([1, 2, 2, 3, 3, 3])); // Résultat attendu : [1, 2, 3]

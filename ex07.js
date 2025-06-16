function fusion(tab1, tab2) {
	let newTab = [];
	for (let i = 0; i < tab1.length; i++) {
		newTab.push(tab1[i]);
	}
	for (let i = 0; i < tab2.length; i++) {
		newTab.push(tab2[i]);
	}
    return newTab;
}
console.log(fusion([1, 2], [3, 4])); // Résultat attendu : [1, 2, 3, 4]

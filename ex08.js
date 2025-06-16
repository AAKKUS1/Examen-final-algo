function tousPositifs(tab) {
	//je considere que 0 est positif
	let estPositif = true;
	if (tab[0] >= 0 && tab[1] >= 0 && tab[2] >= 0) {
		estPositif = true;
	} else {
		estPositif = false;
	}
    return estPositif;
}
console.log(tousPositifs([2, 5, 7])); // Résultat attendu : true
console.log(tousPositifs([2, -1, 7])); // Résultat attendu : false

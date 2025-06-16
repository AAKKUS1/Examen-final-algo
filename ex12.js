function estTableau(valeur) {
	return typeof valeur === "object";
}
console.log(estTableau([1, 2, 3])); // Résultat attendu : true
console.log(estTableau("chaîne")); // Résultat attendu : false

function inverserChaine(texte) {
	let motRetour = '';
	for (let i = texte.length - 1; i >= 0; i--) {
		motRetour += texte[i];
	}
	return motRetour;
}
console.log(inverserChaine("Bonjour")); // Résultat attendu : "ruojnoB"

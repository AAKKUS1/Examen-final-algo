function compterLettre(texte, lettre) {
    let counter = 0;
    for (let i = 0; i < texte.length; i++) {
        if(lettre.includes(texte[i].toLowerCase())){
            counter ++;
        }
    }
    return counter;
}
console.log(compterLettre("Abracadabra", "a")); // Résultat attendu : 5
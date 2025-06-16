function produitTotal(tab) {
    let result = 1;
    for (let i = 0; i < tab.length; i++) {
        result = result * tab[i];                
    }
    return result;
}
console.log(produitTotal([1, 2, 3, 4])); // Résultat attendu : 24
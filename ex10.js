function compterImpairs(tab) {
    let counter = 0;
    for (let i = 0; i < tab.length; i++) {
        if(tab[i] % 2 != 0){
            counter ++;
        }        
    }
    return counter;
}
console.log(compterImpairs([1, 2, 3, 4, 5])); // Résultat attendu : 3
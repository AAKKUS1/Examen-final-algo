function plusGrand(tab) {
    let max =tab[0];
    for (let i = 0; i < tab.length; i++) {
        if(tab[i] > max){
            max = tab[i]
        }        
    }
    return max;
}
console.log(plusGrand([4, 15, 2, 9])); // Résultat attendu : 15
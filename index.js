// Tu as accès au jeu de données ci-dessous, mais il t'est INTERDIT de toucher au code ci-dessous !
const characterNames = [
    '36AIS',
    "A'misandra",
    'Amimari',
    'Alika',
    '54B2',
    "A'merpact",
    'Amazora',
];

// Affiche le nom de chaque personnage accompagné du nombre de caractères qu'il contient
// Ex: Alika (5)
const characterWithLength = characterNames.map(name => {
    return `${name} (${name.length})` ;
})
console.log(characterWithLength)


// Affiche le nom de chaque personnage en minuscules
let charactersLowerCase = characterWithLength.map(el => {
    return el.toLowerCase()
})
console.log(charactersLowerCase);


// Affiche les noms des personnages dont le nom contient la lettre 'a' (minuscule ou majuscule)  
let charactersWithA = characterNames.filter(el => {
  return el.includes("a") || el.includes("A")
})
console.log(charactersWithA)


// Crée une fonction `search(needle)` qui te renvoie les personnages 
// dont le nom contient la lettre passée en paramètre
const search = (arr , letter) => {
  return arr.filter(nom => {
    return nom.includes(letter);
  });
}

console.log(search(characterNames, "b"));
console.log(search(characterNames, "i"));
console.log(search(characterNames, "p"));


// Version avec une fonction unique et une boucle traditionnelle
function onlyWithA(array) {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let nbLettres = array[i].length;
        let character = array[i].toLowerCase();
        if (character.includes("a")) {
            newArray.push(`${character} (${nbLettres})`);
        }
    }

    return newArray;
}

console.log(onlyWithA(characterNames))
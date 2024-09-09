let fruits = ['banane', 'fraise', 'mangue'];

fruits.push('raisin'); //ajouter a la fin

console.log(fruits);

fruits.unshift('orange'); //ajouter au debut

console.log(fruits);

fruits.splice(1, 0, 'kiwi', 'figue'); // commencer a partir de , nbr d'elements a supprimer,elemens a ajouter

console.log(fruits);

fruits.splice(1, 1); // supprimer un element

console.log(fruits);

fruits.shift(); // supprimer le premier element

console.log(fruits);

fruits.pop(); // supprimer le dernier element

console.log(fruits);

fruits.sort(); // trier par ordre alphabetique

console.log(fruits);

fruits.reverse(); // inverser l'ordre

console.log(fruits);

const fruitsWitha = fruits.filter((fruit) => fruit.includes('a')); //permet de filtrer une array

console.log(fruitsWitha);

const majuscule = fruitsWitha.map((fruit) => fruit.toUpperCase()); //permet d'appliqueer qlq chose a chaque element de notre array

console.log(majuscule);

const hasBanane = fruits.some((fruit) => fruit == 'banane'); //verifier si un des elements de notre array respecte une certaine condition return true sinon false

console.log(hasBanane);

const allbananas = fruits.every((fruit) => fruit == 'banane'); //verifier si tous les elements de notre array respecte une certaine condition return true sinon false

console.log(allbananas);

const maFraise = fruits.find((fruit) => fruit == 'fraise'); //permet de trouver le premier element respectant une certaine condition

console.log(maFraise);

const maFraiseIndex = fruits.findIndex((fruit) => fruit === 'fraise'); //permet de trouver le premier index d'un element respectant une certaine condition

console.log(maFraiseIndex);

fruits.forEach((fruit) => console.log(fruit)); //meme chose que map(voir map)

const hasFigue = fruits.includes('figue'); //verifie si un des elements a cette valeur('figue' dans cet exemple)

console.log(hasFigue);

const younesFruits = ['date', 'raisin'];

const sophiaFruits = ['fraise', 'cerise'];

const lovedFruits = younesFruits.concat(sophiaFruits); //permet du fusionner 2 arrays en une seule

const lovedFruitstechnique2 = [...younesFruits, ...sophiaFruits]; //meme chose que concat
console.log(lovedFruits);

console.log(lovedFruitstechnique2);

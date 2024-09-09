let words = ['salim', 'slimane', 'slimaniiiiiiii', 'souleyman'];

function longestWord(arr) {
  let longestword = '';
  arr.forEach((word) => {
    if (word.length > longestword.length) {
      longestword = word;
    }
  });
  return longestword;
}
console.log(longestWord(words));

let chiffres = [1, 23, 4, 17];

function premierPlusGrandQueDix(arr) {
  return arr.find((chiffre) => chiffre > 10);
}

console.log(premierPlusGrandQueDix(chiffres));

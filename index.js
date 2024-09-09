//fonction qui permet d'afficher fizz si i est divisible par 3,buzz si par 5,fizzBuzz si par les 2,i si aucune des conditions 
function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 == 0) output += 'Fizz';
    if (i % 5 == 0) output += 'Buzz';
    if (output == '') output = i;
    console.log(output);
  }
}
//fonction qui permet de prouver que n'importe quel chiffre qui pqsse pqr la fonction de syracuse fini par devenir 1 apres x steps
function Syracuse(n) {
  let steps = 0;
  while (n != 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    steps++;
  }
  console.log(`done in ${steps} steps`);
}

Syracuse(5);

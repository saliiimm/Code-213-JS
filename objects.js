//declaration objet
let user = {
  name: 'Ghalem',
  surname: 'Salim',
  age: 20,
  date_naissance: new Date('2004-01-03'),
  adresse: {
    rue: '123 Main St',
    ville: 'Alger',
    code_postal: '10001',
  },
  approved: false,
  salam: function () {
    console.log('Salam ' + this.name + '!');
  },
  approveUser: function () {
    this.approved = true;
  },
};
//afficher objet
console.log(user);
//afficher value d'une key d'un objet
user.name = 'Derrar';
console.log(user.name);
console.log(user.adresse.ville);
//afficher keys d'un objet
console.log(Object.keys(user));
//afficher values d'un objet
console.log(Object.values(user));
//utiliser une fonction d'un objet
user.salam();
console.log(user.approved);
user.approveUser();
console.log(user.approved);

/*
Un programme qui demande l'utilisateur son nom, son prenom, son age.
Si l'âge est inférieur à 18 lui afficher avec le prénom et nom correspondant:
*/

const readlineSync = require('readline-sync')

const prenom readlineSync.question('Puis-je avoir votre prénom? ')
const nom readlineSync.question('Puis-je avoir votre nom? ')
const ageStr readlineSync.question('Puis-je avoir votre âge? ')
const age = Number(ageStr)

if (age < 18) {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineurs, vous ne pouvez pas voter`)
}
else {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
}

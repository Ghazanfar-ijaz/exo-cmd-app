// Ecrivez un script sayMyName.js qui prend en argument de la ligne de commande une string et affiche un message

/*
const name = process.argv[2]

if (!isNaN(process.argv[2])) {
  console.log('Error: ${name} is a number')
  process.exit(1)
}

console.log(`My name is ${name}.`)
*/

if (process.argv.length !== 3) {
  console.log('usage: node sayMyName.js name')
  process.exit(1)
}
console.log(`My name is ${process.argv[2]}`)
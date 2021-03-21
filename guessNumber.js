const readline = require('readline-sync')
const chalk = require('chalk')

const secretNumber = process.argv[2]


if (process.argv.length !== 3) {
  console.log('Utilisation : node guessNumber.js guessingNumber')
  process.exit(1)
}

if (isNaN(secretNumber)) {
  console.log('Its shoould be a NUMBER')
  process.exit(1)
}


let userNumber = 0
let isNotSolved = true


while (isNotSolved) {
  userNumber = readline.question('Give me a number: ')

  if (isNaN(userNumber)) {
    console.log(chalk.blue(`It's not a number`))
    continue
  }


  if (userNumber === secretNumber) {
    isNotSolved = false
  } else if (userNumber > secretNumber) {
    console.log(chalk.red(`it's a too big number`))
  } else {
    console.log(chalk.red(`it's a too small number`))
  }
}

console.log(chalk.green('Congratulation!'))

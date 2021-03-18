const name = process.argv[2]

if (!isNaN(process.argv[2])) {
  console.log('Error: ${name} is a number')
  process.exit(1)
}

console.log(`My name is ${name}.`)
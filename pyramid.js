
const pyramid = (nbBase, motif) => {
  for (let i = 1; i <= nbBase; i += 1) {
    console.log(motif.repeat(i))
  }
}

const nbBase = process.argv[2]
const motif = process.argv[3]
pyramid(nbBase, motif)
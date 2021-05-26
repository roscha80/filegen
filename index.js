const writeFile = require('./writeFile')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Which functions and files would u like to create? Please seperate by comma ',
  answer => {
    answer
      .split(',')
      .map(name => name.trim())
      .forEach(answer => writeFile(answer))

    rl.close()
  }
)

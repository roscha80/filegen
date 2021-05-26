const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'file',
    message:
      'Which functions and files would u like to create?\n Please seperate by comma ',
  },
]

inquirer.prompt(questions).then(answers => {
  const files = answers['file'].split(',').map(el => el.trim())
  files.forEach(file => writeFile(file))
})

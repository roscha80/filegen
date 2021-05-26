const writeFile = require('./writeFile')
const inquirer = require('inquirer')

const templates = {
  component: name =>
    `
  import styled from 'styled-components/macro'

  export default function ${name} () {
    return <div>${name}</div>
  }
  `,
  spec: name =>
    `
  import {render, screen} from '@testing-library/react'
  import ${name} from './${name}'

  describe('${name}', ()=>{
    it('renders', ()=>{
      render(<${name}/>)
      expect(screen.getByText('${name}')).toBeInTheDocument()
    })
  })
  `,
  stories: name => `
  import ${name} from './${name}'
  export default {
    title: '${name}',
    component: ${name}
  }

  const Template = args => <${name} {...args} />

  export const Default = Template.bind({})
  Default.args = {}
  `,
}

const questions = [
  {
    type: 'input',
    name: 'name',
    message:
      'Which functions and files would u like to create?\n Please seperate by comma ',
  },
  {
    type: 'checkbox',
    message: 'Please select a file type',
    name: 'fileTypes',
    choices: [
      {
        name: 'component',
      },
      {
        name: 'spec',
      },
      {
        name: 'stories',
      },
    ],
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one fyle type!'
      }
      return true
    },
  },
]

inquirer.prompt(questions).then(answers => {
  answers.fileTypes.forEach(fileType => {
    const templateFunction = templates[fileType]
    const fileString = templateFunction(answers.name)
    writeFile(answers.name, fileType, fileString)
  })
  // const names = answers['name'].split(',').map(el => el.trim())
  // names.forEach(name => writeFile(name), writeStories())
  // console.log(answers)
})

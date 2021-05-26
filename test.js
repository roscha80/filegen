const testObject = {
  component: name => `
    import styled from 'styled 
    export default function ${name}(){
        return <div>${name}</div>
    }`,
  spec: name => `import ${name} from './${name}' describe()`,
  stories: name => `import ${name} from './${name}'`,
}

const componentFunction = testObject['component']
const specFunction = testObject['spec']
const storiesFunction = testObject['stories']

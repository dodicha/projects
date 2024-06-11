import { styled } from 'styled-components'
import './App.css'

const Title = styled.h1`
  color: ${(props)=>{
    return props.color
  }};
  &:hover{
    color: white;
  }
`;
const Header = styled.section`
  padding: 50px;
  background: blue;
  width: 350px;
  
  &:hover {
    background-color: #0d4a0d;
  }
`;

function MyComponent(): JSX.Element{
  return (
    <div>Hello, World!</div>
  )
}

function addFrame (component: JSX.Element): JSX.Element{
return <div style={{width: 350, backgroundColor: 'blue'}}>{component}</div>
}

const UseFrame = addFrame(MyComponent())







function App() {  
  
  return (
    <>
      <Header id='head'>
        <Title
        id='test'
        color='red'
        >Hello World!
        </Title>
      </Header>
      <MyComponent/>
      {UseFrame}
    </>
    
  )
}

export default App

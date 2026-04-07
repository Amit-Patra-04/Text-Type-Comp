import { useState } from 'react'
import './App.css'
import TextType from './TextType';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <TextType 
          className= "comp"
          text={["My Name is Amit", "Component to be Used", "This is a Text typing Effect!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          texts={["Glad To See You Here","Have a awsome experience!","Thank you for Watching!"]}
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

   let [counter , setCounter] = useState(15)
  
  // let counter = 125
  const addvalue = () => {
    // counter++
    if (counter < 20) {
      setCounter(counter+1) // or else can directly pass counter variable 
    }
    
    // console.log("clicked" , counter);
  }

  const subvalue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
    // console.log("value decreased" , counter);
    
  }


  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>
     <button
     onClick={addvalue}>add value {counter}</button>
     <br />
     <button
     onClick={subvalue}>decrease value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App

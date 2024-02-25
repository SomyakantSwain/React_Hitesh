import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15) // setCounter is a function  which is  responible for change of counter which is a variable

  const addValue = () => {
    console.log("value ", counter);

    if (counter > 19) {
      setCounter(20);
    } else {

      setCounter(counter + 1)
    }

  }


  const removeValue = () => {


    if (counter < 1) {
      setCounter(0);
    } else {
      setCounter(counter - 1)
    }
  }



  return (
    <>
      <h1>Somya Kant Swain</h1>
      <h3>COunter value:{counter}</h3>
      <button
        onClick={addValue} >Add value {counter}</button>
      <br />
      <button onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App

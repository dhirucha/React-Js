import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter  >= 20){
      console.log('not more than 20');
    }else{
      counter = counter + 1
    setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter  <= 0){
      console.log('not less than 0');
    }else{
      counter = counter - 1
    setCounter(counter)
    }
  }

  return (
    <>
      
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add VAlue</button>
     <br />
     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("red")

  return (
   <div className="w-screen h-screen relative"
   style={{backgroundColor: color}}
   >
    <div className='ml-20 mr-20 absolute inset-x-0 bottom-0 h-16 ...'
     style={{backgroundColor: 'white'}}
    >
      <button className='mt-3 mr-10'
       style={{backgroundColor: 'red'}} onClick={()=> setColor("red")}
      >Red      
      </button>
      <button  className='mt-3 mr-10'
       style={{backgroundColor: 'blue'}} onClick={()=> setColor("blue")}
      >Blue

      </button>
      <button
       style={{backgroundColor: 'green'}} onClick={()=> setColor("green")}
      >Green

      </button>
    </div>
    

   </div>
  )
}
 
export default App

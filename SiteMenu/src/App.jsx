import { useState } from 'react'
import './App.css'
import Snaks from './section1/Snaks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Snaks/>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'



function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Home />
      </div>
  )
}

export default App

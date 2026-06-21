import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <h1>Ground Control App</h1>
  <p>Flight Number:</p>
  <p>Route:</p>
  <p>Flight Status:</p>
  <p>Crew Status:</p>
  <p>Ready:</p>
    </div>
  

  )
}

export default App

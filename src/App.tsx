import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App

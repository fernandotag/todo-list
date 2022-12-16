import { useState } from 'react'
import { FormBar } from './components/FormBar'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <FormBar />
        </main>
      </div>
    </div>
  )
}

export default App

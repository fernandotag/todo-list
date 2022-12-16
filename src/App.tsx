import { useState } from 'react';
import { FormBar } from './components/FormBar';
import { Header } from './components/Header';
import { TaskTable } from './components/TaskTable';
import './global.css';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <FormBar />
          <TaskTable />
        </main>
      </div>
    </div>
  )
}

export default App

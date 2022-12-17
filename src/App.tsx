import { useState } from 'react';
import { FormBar } from './components/FormBar';
import { Header } from './components/Header';
import { TaskTable } from './components/TaskTable';
import './global.css';
import styles from './App.module.css';

export interface ITask {
  id: number,
  title: string,
  isDone: boolean
}
const tasks: ITask[] = [
  {id: 1, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: false},
  {id: 2, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: false},
  {id: 3, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: false},
  {id: 4, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: true},
  {id: 5, title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: true}
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <FormBar />
          <TaskTable tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';
import { FormBar } from './components/FormBar';
import { Header } from './components/Header';
import { TaskTable } from './components/TaskTable';
import { v4 as uuidv4 } from 'uuid';
import './global.css';
import styles from './App.module.css';

export interface ITask {
  id: string,
  title: string,
  isDone: boolean
}
const tasksMock: ITask[] = [
  {id: uuidv4(), title: "Buy milk.", isDone: false},
  {id: uuidv4(), title: "Pay the bill", isDone: false},
  {id: uuidv4(), title: "Wash the dishes", isDone: false},
  {id: uuidv4(), title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: true},
  {id: uuidv4(), title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", isDone: true}
];

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<ITask[]>(tasksMock);

  function sortByIsDone(tasks: ITask[]) {
    return tasks.sort((a, b) => {
      return Number(a.isDone) - Number(b.isDone)
    })
  }

  function createTask(newTask: ITask) {
    const newTasksArray = [...tasks, newTask];

    setTasks(sortByIsDone(newTasksArray));
  }

  function selectTask(taskId: string) {
    const newTasksArray = tasks.map((task: ITask) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });
    setTasks(sortByIsDone(newTasksArray));
  }

  function deleteTask(taskId: string) {
    const newTasksArray = tasks.filter((task: ITask) => task.id !== taskId);
    setTasks(newTasksArray);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <FormBar onCreate={createTask}  />
          <TaskTable 
            tasks={tasks} 
            onSelect={selectTask} 
            onDelete={deleteTask} 
          />
        </main>
      </div>
    </div>
  )
}

export default App

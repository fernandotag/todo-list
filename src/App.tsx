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
  isDone: boolean,
  createdAt: Date

}
const tasksMock: ITask[] = [
  {
    id: uuidv4(),
    title: "Buy milk.",
    isDone: false,
    createdAt: new Date('2022-01-03 20:00:00')
  },
  {
    id: uuidv4(),
    title: "Send report to Bill",
    isDone: false,
    createdAt: new Date('2022-02-03 20:00:00')
  },
  {
    id: uuidv4(),
    title: "Pay the bill",
    isDone: false,
    createdAt: new Date('2022-02-03 09:00:00')
  },
  {
    id: uuidv4(),
    title: "Pick up groceries",
    isDone: false,
    createdAt: new Date('2022-07-03 20:00:00')
  },
];

function App() {
  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState<ITask[]>(sortByIsDoneAndDate(tasksMock));

  function sortByIsDoneAndDate(tasks: ITask[]) {
    return tasks.sort((a, b) => {
      return Number(a.isDone) - Number(b.isDone) || b.createdAt.getTime() - a.createdAt.getTime();
    })
  }

  function createTask(newTask: ITask) {
    const newTasksArray = [...tasks, newTask];

    setTasks(sortByIsDoneAndDate(newTasksArray));
  }

  function selectTask(taskId: string) {
    const newTasksArray = tasks.map((task: ITask) => {
      if (task.id === taskId) task.isDone = !task.isDone;
      return task;
    });
    setTasks(sortByIsDoneAndDate(newTasksArray));
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
          <FormBar onCreate={createTask} />
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

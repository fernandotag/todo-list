import { ITask } from '../App';
import { TaskRow } from './TaskRow';
import styles from './TaskTable.module.css';

interface ITaskTableProps {
    tasks: ITask[]
}

export function TaskTable({tasks}: ITaskTableProps) {
    const totalCreatedTasked = 5;

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th colSpan={3}>
                        <div>
                            <div>
                                <span>Tarefas Criadas</span>
                                <span className={styles.badge}>{totalCreatedTasked}</span>
                            </div>
                            <div>
                                <span>Concluídas</span>
                                <span className={styles.badge}>2 de 5</span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(({ id, title, isDone }: ITask) => (
                    <TaskRow 
                        key={id}
                        taskId={id} 
                        title={title}
                        isDone={isDone}
                    />
                ))}
            </tbody>
        </table>
    )
}
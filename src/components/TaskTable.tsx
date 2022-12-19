import { ITask } from '../App';
import { TaskRow } from './TaskRow';
import styles from './TaskTable.module.css';

interface ITaskTableProps {
    tasks: ITask[];
    onSelect: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function TaskTable({tasks, onSelect, onDelete}: ITaskTableProps) {
    const totalCreatedTasked = tasks.length;

    function onSelectTaskProps(taskId: string) {
        onSelect(taskId);
    }

    function onDeleteTaskProps(taskId: string) {
        onDelete(taskId);
    }

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
                        onSelect={onSelectTaskProps}
                        onDelete={onDeleteTaskProps}
                    />
                ))}
            </tbody>
        </table>
    )
}
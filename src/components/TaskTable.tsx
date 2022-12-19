import { ClipboardText } from 'phosphor-react';
import { ITask } from '../App';
import { TaskRow } from './TaskRow';
import styles from './TaskTable.module.css';
import clipboardIcon from '../assets/clipboard.svg';

interface ITaskTableProps {
    tasks: ITask[];
    onSelect: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function TaskTable({tasks, onSelect, onDelete}: ITaskTableProps) {
    const totalCreatedTasks = tasks.length;
    const totalDoneTasks = tasks.filter(task => task.isDone).length;

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
                                <span>Created tasks</span>
                                <span className={styles.badge}>{totalCreatedTasks}</span>
                            </div>
                            <div>
                                <span>Done</span>
                                <span className={styles.badge}>
                                    {`${totalDoneTasks} of ${totalCreatedTasks}`}
                                </span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tasks.length === 0 ? (
                    <div className={styles.emptyList}>
                        <img src={clipboardIcon} />
                        <p>
                            <strong>You don't have any tasks registered yet.</strong><br />
                            Create tasks and organize your to-do items
                        </p>
                    </div>
                ) : (
                    tasks.map(({ id, title, isDone }: ITask) => (
                        <TaskRow
                            key={id}
                            taskId={id}
                            title={title}
                            isDone={isDone}
                            onSelect={onSelectTaskProps}
                            onDelete={onDeleteTaskProps}
                        />
                    ))
                )}
            </tbody>
        </table>
    )
}
import styles from './TaskRow.module.css';
import { Check, Trash } from "phosphor-react";

interface ITaskRowProps {
    taskId: string,
    title: string,
    isDone: boolean
    onSelect: (taskId: string) => void;
    onDelete: (taskId: string) => void;
}

export function TaskRow({taskId, title, isDone, onSelect, onDelete}: ITaskRowProps) {
    function handleSelectTask() {
        onSelect(taskId);
    }

    function handleDeleteTask() {
        onDelete(taskId);
    }

    return (
        <tr className={styles.task}>
            <td>
                <button 
                    className={
                        isDone ? styles.rowTaskToggleSelected : styles.rowTaskToggle
                    }
                    onClick={handleSelectTask}>
                    {isDone ? <Check size={24} weight="bold"></Check> : null}
                </button>
            </td>
            <td className={isDone ? styles.titleSelected : styles.title}>{title}</td>
            <td><button className={styles.trash} onClick={handleDeleteTask}>
                <Trash size={15} weight="bold">
            </Trash></button></td>
        </tr>
    )
}
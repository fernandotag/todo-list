import styles from './TaskRow.module.css';
import { Check, Trash } from "phosphor-react";

interface ITaskRowProps {
    taskId: string,
    title: string,
    isDone: boolean
    onSelect: (taskId: string) => void;
}

export function TaskRow({taskId, title, isDone, onSelect}: ITaskRowProps) {
    function handleSelectTask() {
        onSelect(taskId);
    }

    return (
        <tr className={styles.task}>
            <td>
            <button 
                className={
                    isDone ? styles.rowTaskToggleSelected : styles.rowTaskToggle
                }
                onClick={handleSelectTask}
            >{isDone ? <Check size={24} weight="bold"></Check> : null}</button>
            </td>
            <td className={isDone ? styles.titleSelected : styles.title}>{title}</td>
            <td><a href="#" className={styles.trash}><Trash size={15} weight="bold"></Trash></a></td>
        </tr>
    )
}
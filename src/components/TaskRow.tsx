import styles from './TaskRow.module.css';
import { Check, Trash } from "phosphor-react";

interface ITaskRowProps {
    taskId: number,
    title: string,
    isDone: boolean
}

export function TaskRow({taskId, title, isDone}: ITaskRowProps) {
    return (
        <tr className={styles.task}>
            <td>
            <button 
                className={
                    isDone ? styles.rowTaskToggleSelected : styles.rowTaskToggle
                }
            >{isDone ? <Check size={24} weight="bold"></Check> : null}</button>
            </td>
            <td className={isDone ? styles.rowSelected : ''}>{title}</td>
            <td><a href="#" className={styles.trash}><Trash size={15} weight="bold"></Trash></a></td>
        </tr>
    )
}
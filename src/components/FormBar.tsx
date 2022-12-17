import styles from './FormBar.module.css';
import { Plus } from 'phosphor-react';

export function FormBar() {
    return (
        <form className={styles.form}>
            <input placeholder='Adicione uma nova tarefa'></input>
            <button type="submit">
                <span>Criar</span>
                <Plus size={15} weight="bold" className={styles.plusIcon} />
            </button>
        </form>
    )
}
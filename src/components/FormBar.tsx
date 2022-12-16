import styles from './FormBar.module.css';

export function FormBar() {
    return (
        <form className={styles.form}>
            <input placeholder='Adicione uma nova tarefa'></input>
            <button type="submit">Criar</button>
        </form>
    )
}
import styles from './TaskTable.module.css';

export function TaskTable() {
    const totalCreatedTasked = 5;

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th colSpan={3}>
                        <div>
                            <span>Tarefas Criadas</span>
                            <span className={styles.badge}>{totalCreatedTasked}</span>
                        </div>
                        <div>
                            <span>Concluídas</span>
                            <span className={styles.badge}>2 de 5</span>
                        </div>
                    </th>
                </tr>
            </thead>
        </table>
    )
}
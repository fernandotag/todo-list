import styles from './FormBar.module.css';
import { Plus } from 'phosphor-react';
import { ITask } from '../App';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from "uuid";

interface IFormBarProps {
    onCreate: (newTask: ITask) => void;
}

export function FormBar({onCreate}: IFormBarProps) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    function handleCrateNewTask(event: FormEvent) {
        event.preventDefault();
        const newTask = {
            id: uuidv4(),
            title: newTaskTitle,
            isDone: false,
        };

        onCreate(newTask);
        setNewTaskTitle('');
    }

    function handleTypeNewTaskTitleText(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTaskTitle(event.target.value);
    }

    function handleNewTaskTitleInvalid(event: any) {
        event.target.setCustomValidity("Esse campo é obrigatório");
    }

    return (
        <form onSubmit={handleCrateNewTask} className={styles.form}>
            <input 
                onChange={(e) => handleTypeNewTaskTitleText(e) }
                required
                onInvalid={handleNewTaskTitleInvalid}
                placeholder='Adicione uma nova tarefa'
            />
            <button type="submit" >
                <span>Criar</span>
                <Plus size={15} weight="bold" className={styles.plusIcon} />
            </button>
        </form>
    )
}
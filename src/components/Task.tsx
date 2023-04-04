import styles from './Task.module.css'
import { Trash, Clipboard } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TaskType {
  id: string;
  text: string;
  done: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function Task() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setNewTask] = useState<TaskType[] | []>([])

  function handleNewTaskChangeText(event: ChangeEvent<HTMLInputElement>) {
    setTaskText(event.target.value);    
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    const newTask:TaskType = {
      id : uuidv4(),
      text : taskText,
      done: false
    }
    setNewTask([...tasks, newTask]);
    setTaskText('');
    console.log(tasks);
  }

  function handleTaskDoneCheck(id: string) {
    const newTaskListDoneCheck = tasks.map(item => {
      if(item.id === id) {
        item.done = !item.done;
      }
      return(item)
    }) 
    setNewTask(newTaskListDoneCheck) 
  }

  function handleRemoveTask(id: string) {
    const newTaskList = tasks.filter(item => {
      return item.id !== id
    }) 
    setNewTask(newTaskList) 
  }

  const totalTask = tasks.length;
  const totalTaskDone = tasks.filter(item => item.done).length;

  return (
    <>
      <form 
        className={styles.taskForm }
        onSubmit={handleCreateNewTask} >
          <input 
            type="text" 
            value={taskText}
            onChange={handleNewTaskChangeText}/>
          <button type="submit">Criar</button>
      </form>
      <header className={styles.taskHeader}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{totalTask}</span>
        </div>
        <div>
          <strong>Concluidas</strong>
          <span>{totalTaskDone} de {totalTask}</span>
        </div>
      </header>
      {
        tasks.map(item => {
          return (
            <div
              key={item.id} 
              className={styles.taskBody}>
                <input 
                  type="checkbox" 
                  onChange={() => handleTaskDoneCheck(item.id)}
                  checked={item.done}/>
                <p className={item.done ? styles.taskDone : ''}>{item.text}
                </p>
                <button 
                  title='Deletar comentário' 
                  onClick={() => handleRemoveTask(item.id)} >
                  <Trash size={24}/>
                </button>
            </div>
          )
        })
      }
      <div 
        className={tasks.length === 0 ? styles.noneTask : styles.noneTaskInviseble}>
        <Clipboard size={56}/>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
      
    </>
  );
}
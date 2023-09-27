import { Header } from './componentes/Header';
import { PlusCircle } from 'phosphor-react';
import styles from './App.module.css';
import { Task } from './componentes/Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import { EmptyTaskList } from './componentes/EmptyTaskList';

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskCompletion, setTaskCompletion] = useState<{
    [key: number]: boolean;
  }>({});

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const taskId = tasks.length;
    setTasks([...tasks, newTaskText]);
    setTaskCompletion({ ...taskCompletion, [taskId]: false });
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskIndex = tasks.findIndex((task) => task === taskToDelete);
    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(taskIndex, 1);
      setTasks(updatedTasks);

      const updatedCompletion = { ...taskCompletion };
      delete updatedCompletion[taskIndex];
      setTaskCompletion(updatedCompletion);
    }
  }

  function toggleTaskCompletion(taskId: number, isChecked: boolean) {
    setTaskCompletion({ ...taskCompletion, [taskId]: isChecked });
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  const completedTaskCount = Object.values(taskCompletion).filter(
    (isChecked) => isChecked
  ).length;

  return (
    <>
      <Header />

      <form onSubmit={handleCreateNewTask} className={styles.input}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.tasksControl}>
        <p className={styles.createdTasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p className={styles.completedTasks}>
          Concluídas
          <span>
            {completedTaskCount} de {tasks.length}
          </span>
        </p>
      </div>

      {tasks.length === 0 ? (
        <EmptyTaskList />
      ) : (
        <div>
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                taskDescription={task}
                isCompleted={taskCompletion[index] || false}
                onDeleteTask={deleteTask}
                onCompleteTask={(isChecked) =>
                  toggleTaskCompletion(index, isChecked)
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
}

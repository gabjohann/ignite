import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { ChangeEvent } from 'react';
/* import { ChangeEvent, useState } from 'react'; */

interface TaskProps {
  taskDescription: string;
  onDeleteTask: (taskDescription: string) => void;
  onCompleteTask: (isCheck: boolean) => void;
  isCompleted: boolean;
}

export function Task({
  taskDescription,
  onDeleteTask,
  onCompleteTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(taskDescription);
  }

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    const isChecked = event.target.checked;
    //setIsChecked(isChecked);
    onCompleteTask(isChecked);
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <input
          type='checkbox'
          name='completedTask'
          id='completedTask'
          onChange={handleCheck}
        />
        <p>{taskDescription}</p>

        <button onClick={handleDeleteTask}>
          <Trash size={20} />
        </button>
      </div>
    </div>
  );
}

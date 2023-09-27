import clipboard from '../assets/clipboard.svg';

import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
    <div className={styles.emptyList}>
      <hr />
      <div className={styles.content}>
        <img src={clipboard} alt='Clipboard image' />
        <h1>Você ainda não tem tarefas cadastradas</h1>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

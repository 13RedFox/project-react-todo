import React, { FC } from 'react';
import Todo from './components/Todo';

import styles from './Todos.module.scss';

interface TodosProps {
  className?: string;
}

export const Todos: FC<TodosProps> = () => {
  return (
    <main className={styles.todos}>
      <Todo />
    </main>
  );
};

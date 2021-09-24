import classNames from 'classnames';
import React, { FC, useState } from 'react';
import IconSvg from '../../../../../../assets/icons';
import TodoPopup from '../TodoPopup';

import styles from './Todo.module.scss';

interface TodoProps {
  className?: string;
  title: string;
}

export const Todo: FC<TodoProps> = ({ title }) => {
  const [addNewTodo, setAddNewTodo] = useState(true);

  return (
    <div className={styles.todo}>
      <h2 className={styles.todoTitle}>{title}</h2>

      <ul className={styles.todoList}>
        <li className={styles.todoItem}>
          <div className={classNames(styles.todoMarker)}>
            <IconSvg id="done" />
          </div>
          <span className={styles.todoDescription}>Изучить JavaScript</span>
        </li>
        <li className={styles.todoItem}>
          <div className={classNames(styles.todoMarker, styles.done)}>
            <IconSvg id="done" />
          </div>
          <span className={styles.todoDescription}>Изучить JavaScript One</span>
        </li>
      </ul>

      <button className={styles.todoBtn}>
        <IconSvg id="plus" />
        <span className={styles.todoBtnDescr}>Новая заметка</span>
      </button>

      {addNewTodo && <TodoPopup />}
    </div>
  );
};

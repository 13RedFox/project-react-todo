import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './TodoPopup.module.scss';

interface TodoPopupProps {
  className?: string;
  setAddNewTodo: (arg0: boolean) => void;
}

export const TodoPopup: FC<TodoPopupProps> = ({ setAddNewTodo }) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddNewTodo(true);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} type="text" placeholder="Текст задачи" required />
      <div className={styles.wrapperBtn}>
        <button className={styles.btn} type="submit">
          Добавить задачу
        </button>
        <button
          className={classNames(styles.btn, styles.cancel)}
          type="button"
          onClick={() => setAddNewTodo(true)}>
          Отмена
        </button>
      </div>
    </form>
  );
};

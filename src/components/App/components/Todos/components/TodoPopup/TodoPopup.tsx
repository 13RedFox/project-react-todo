import classNames from 'classnames';
import React, { FC } from 'react';

import styles from './TodoPopup.module.scss';

interface TodoPopupProps {
  className?: string;
}

export const TodoPopup: FC<TodoPopupProps> = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Текст задачи" required />
      <div className={styles.wrapperBtn}>
        <button className={styles.btn} type="submit">
          Добавить задачу
        </button>
        <button className={classNames(styles.btn, styles.cancel)} type="button">
          Отмена
        </button>
      </div>
    </form>
  );
};

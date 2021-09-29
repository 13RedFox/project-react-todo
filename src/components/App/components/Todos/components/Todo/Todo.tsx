import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import IconSvg from '../../../../../../assets/icons';
import TodoPopup from '../TodoPopup';

import styles from './Todo.module.scss';

interface TodoProps {
  className?: string;
}

export const Todo: FC<TodoProps> = () => {
  const [addNewTodo, setAddNewTodo] = useState(true);

  const store = useSelector((state: any) => state.folders);

  const filter = store.filter((item: any) => item.isActive === true);
  console.log(filter);

  const toggleButtonVisible = () => {
    setAddNewTodo((prevState) => !prevState);
  };

  return (
    <div className={styles.todo}>
      {filter.length > 0 ? (
        <>
          <h2 className={classNames(styles.todoTitle)} style={{ color: filter[0].color }}>
            {filter[0].name}
          </h2>

          <ul className={styles.todoList}>
            {(filter[0].todos || []).map((todo: any, idx: number) => (
              <li className={styles.todoItem} key={idx}>
                <div className={classNames(styles.todoMarker)}>
                  <IconSvg id="done" />
                </div>
                <span className={styles.todoDescription}>{todo.name}</span>
              </li>
            ))}
          </ul>

          {addNewTodo && (
            <button className={styles.todoBtn} onClick={toggleButtonVisible}>
              <IconSvg id="plus" />
              <span className={styles.todoBtnDescr}>Новая заметка</span>
            </button>
          )}

          {!addNewTodo && <TodoPopup setAddNewTodo={setAddNewTodo} />}
        </>
      ) : (
        <h1>Empty Todos</h1>
      )}
    </div>
  );
};

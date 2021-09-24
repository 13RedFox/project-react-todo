import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import IconSvg from '../../../../../../assets/icons';
import { addFolderAction } from '../../../../../../store/actions/actions';

import styles from './FoldersPopup.module.scss';

interface FoldersPopupProps {
  className?: string;
  closeFoldersPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ColoredProps {
  color: string;
  id: string;
  isChecked: boolean;
}

export const FoldersPopup: FC<FoldersPopupProps> = ({ closeFoldersPopup }) => {
  const [isSelect, setIsSelect] = useState('#c9d1d3');
  const [inputValue, setInputValue] = useState('');
  const store = useSelector((state: any) => state.folders);

  const dispatch: Dispatch<any> = useDispatch();

  const colored: ColoredProps[] = [
    { color: '#c9d1d3', id: '0', isChecked: false },
    { color: '#42b883', id: '1', isChecked: false },
    { color: '#64c4ed', id: '2', isChecked: false },
    { color: '#ffbbcc', id: '3', isChecked: false },
    { color: '#b6e6bd', id: '4', isChecked: false },
    { color: '#c355f5', id: '5', isChecked: false },
    { color: '#09011a', id: '6', isChecked: false },
    { color: '#ff6464', id: '7', isChecked: false },
  ];

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFolder = {
      name: inputValue,
      color: isSelect,
      isActive: false,
      id: store.length,
      todos: [],
    };

    dispatch(addFolderAction(newFolder));
    closeFoldersPopup(false);
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <div className={styles.close} onClick={() => closeFoldersPopup(false)}>
        <IconSvg id="plus" />
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="Название папки"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      />

      <div className={styles.wrapperRadio}>
        {(colored || []).map((item) => (
          <div className={styles.inputRadio} key={item.id}>
            <input
              className={styles.radio}
              type="radio"
              id={item.id}
              value={item.color}
              checked={isSelect === item.color}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsSelect(e.target.value)}
            />
            <label
              className={styles.label}
              style={{ backgroundColor: item.color }}
              htmlFor={item.id}
            />
          </div>
        ))}
      </div>

      <button className={styles.button} type="submit">
        Добавить
      </button>
    </form>
  );
};

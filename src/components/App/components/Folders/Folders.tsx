import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconSvg from '../../../../assets/icons';
import { removeFolderAction, setFolderAction } from '../../../../store/actions/actions';
import FoldersPopup from './components/FoldersPopup';

import styles from './Folders.module.scss';

interface FoldersProps {
  className?: string;
}

export const Folders: FC<FoldersProps> = () => {
  const [showFoldersPopup, setShowFoldersPopup] = useState(false);

  const store = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const folders = store.folders;

  const showAllFolders = () => {
    // console.log('Show all folders');
  };

  const isActiveFolder = (id: number) => {
    const isActiveItem = [...folders];

    isActiveItem.forEach((item: any) => {
      item.id === id ? (item.isActive = true) : (item.isActive = false);
    });

    dispatch(setFolderAction(isActiveItem));
  };

  const addNewFolder = () => {
    setShowFoldersPopup(true);
  };

  const onDeleteItem = (idx: number) => {
    const removeItem = folders.splice(idx, 1);

    dispatch(removeFolderAction(removeItem));
  };

  return (
    <aside className={styles.folders}>
      {folders.length > 0 ? (
        <button className={styles.allBtn} onClick={showAllFolders}>
          <IconSvg id="entypo-list" />
          <span className={styles.allBtnText}>Все задачи</span>
        </button>
      ) : null}

      <ul className={styles.foldersList}>
        {(folders || []).map((item: any, idx: number) => (
          <li
            className={classNames(styles.item, { [styles.active]: item.isActive })}
            key={idx}
            onClick={() => isActiveFolder(item.id)}>
            <div className={styles.marker} style={{ backgroundColor: item.color }} />
            <span className={styles.itemText}>{item.name}</span>
            <IconSvg id="plus" onDelete={() => onDeleteItem(idx)} />
          </li>

          // <FoldersItem item={item} key={idx} isActiveFolder={isActiveFolder} />
        ))}
      </ul>

      <button className={styles.addFolder} onClick={addNewFolder}>
        <IconSvg id="plus" />
        <span className={styles.addFolderText}>Новая папка</span>
      </button>

      {showFoldersPopup && <FoldersPopup closeFoldersPopup={setShowFoldersPopup} />}
    </aside>
  );
};

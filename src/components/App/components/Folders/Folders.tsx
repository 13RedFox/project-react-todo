import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import IconSvg from '../../../../assets/icons';
import FoldersItem from './components/FoldersItem';
import FoldersPopup from './components/FoldersPopup';

import styles from './Folders.module.scss';

interface FoldersProps {
  className?: string;
}

export const Folders: FC<FoldersProps> = () => {
  const [showFoldersPopup, setShowFoldersPopup] = useState(false);

  const store = useSelector((state: any) => state);

  const folders = store.folders;
  console.log(folders);

  const showAllFolders = () => {
    console.log('Show all folders');
  };

  const addNewFolder = () => {
    console.log('Add New Folder');
    setShowFoldersPopup(true);
  };

  return (
    <aside className={styles.folders}>
      <button className={styles.allBtn} onClick={showAllFolders}>
        <IconSvg id="entypo-list" />
        <span className={styles.allBtnText}>Все задачи</span>
      </button>

      <ul className={styles.foldersList}>
        {(folders || []).map((item: any) => (
          <FoldersItem item={item} key={item.color} />
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

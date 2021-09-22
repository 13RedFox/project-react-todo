import React, { FC } from 'react';

import styles from './Folder.module.scss';

interface FolderProps {
  className?: string;
}

export const Folder: FC<FolderProps> = () => {
  return (
    <aside className={styles.folders}>
      <a href="#!" className={styles.allFolders}>
        <span>Все задачи</span>
      </a>
    </aside>
  );
};

import React, { FC } from 'react';

import styles from './Folders.module.scss';

interface FoldersProps {
  className?: string;
}

export const Folders: FC<FoldersProps> = () => {
  return (
    <aside className={styles.folders}>
      <a href="#!" className={styles.allFolders}>
        <span>Все задачи</span>
      </a>
    </aside>
  );
};

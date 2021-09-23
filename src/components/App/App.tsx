import React, { FC } from 'react';

import Folder from './components/Folders';

import styles from './App.module.scss';

interface AppProps {
  className?: string;
}

export const App: FC<AppProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Folder />
    </div>
  );
};

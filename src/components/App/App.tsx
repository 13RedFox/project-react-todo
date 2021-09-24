import React, { FC } from 'react';

import Folder from './components/Folders';

import styles from './App.module.scss';
import Todos from './components/Todos';

interface AppProps {
  className?: string;
}

export const App: FC<AppProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Folder />
      <Todos />
    </div>
  );
};

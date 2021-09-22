import React, { FC } from 'react';

import styles from './App.module.scss';

interface AppProps {
  className?: string;
}

export const App: FC<AppProps> = () => {
  return <div className={styles.wrapper}>Todo App</div>;
};

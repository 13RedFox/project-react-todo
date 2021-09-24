import classNames from 'classnames';
import React, { FC } from 'react';
import IconSvg from '../../../../../../assets/icons';

import styles from './FoldersItem.module.scss';

interface FoldersItemProps {
  className?: string;
  item: any;
  isActiveFolder: (arg0: number) => void;
}

export const FoldersItem: FC<FoldersItemProps> = ({ item, isActiveFolder }) => {
  const onDeleteItem = () => {
    console.log('Delete');
  };
  return (
    <li
      className={classNames(styles.item, { [styles.active]: item.isActive })}
      onClick={() => isActiveFolder(item.id)}>
      <div className={styles.marker} style={{ backgroundColor: item.color }} />
      <span className={styles.itemText}>{item.name}</span>
      <IconSvg id="plus" onDelete={onDeleteItem} />
    </li>
  );
};

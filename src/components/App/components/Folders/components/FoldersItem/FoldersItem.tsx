import classNames from 'classnames';
import React, { FC } from 'react';
import IconSvg from '../../../../../../assets/icons';

import styles from './FoldersItem.module.scss';

interface FoldersItemProps {
  className?: string;
  item: any;
}

const onDelete = () => {
  console.log('Delete folder item');
};

export const FoldersItem: FC<FoldersItemProps> = ({ item }) => {
  return (
    <li className={classNames(styles.item, { [styles.active]: item.isActive })}>
      <div className={styles.marker} style={{ backgroundColor: item.color }} />
      <span className={styles.itemText}>{item.name}</span>
      <IconSvg id="plus" onDelete={onDelete} />
    </li>
  );
};

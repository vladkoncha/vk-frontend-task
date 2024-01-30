'use client';

import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { CatsContext } from '@/src/app/store/cats-provider';

import styles from './styles.module.scss';
import { FavoriteButtonProps } from './types';

export const FavoriteButton = observer(
  ({ catId, isFavorite }: FavoriteButtonProps) => {
    const catsStore = useContext(CatsContext);

    const handleClick = () => {
      console.log(isFavorite, catId);
      if (isFavorite) {
        catsStore?.removeFavorite(catId);
      } else {
        catsStore?.addFavorite(catId);
      }
    };

    return (
      <button
        onClick={handleClick}
        className={cn(styles.favoriteButton, {
          [styles.active]: isFavorite,
        })}
      />
    );
  }
);

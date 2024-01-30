'use client';

import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import { CatsContext } from '@/src/app/store/cats-provider';
import { CatsGrid } from '@/src/widgets/cats-grid';

import styles from './styles.module.scss';

export const FavoritesPageContainer = observer(() => {
  const catsStore = useContext(CatsContext);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.main}>
        <CatsGrid
          cats={catsStore?.getFavorites() ?? []}
          favoriteIds={catsStore?.getFavoriteIds() ?? new Set()}
        />
      </div>
    </div>
  );
});

'use client';

import { observer } from 'mobx-react-lite';
import { useContext, useRef } from 'react';

import { CatsContext } from '@/src/app/store/cats-provider';
import { fetchCats } from '@/src/features/fetch-cats';
import { useFetch } from '@/src/shared/hooks/useFetch';
import { useObserver } from '@/src/shared/hooks/useObserver';
import { CatsGrid } from '@/src/widgets/cats-grid';

import styles from './styles.module.scss';

export const MainPageContainer = observer(() => {
  const catsStore = useContext(CatsContext);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const [fetchNewCats, isLoading, error] = useFetch(async () => {
    const newCats = await fetchCats();
    catsStore?.addCats(newCats);
  });

  useObserver(loadMoreRef, true, isLoading, () => {
    fetchNewCats();
  });

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.main}>
        <CatsGrid
          cats={catsStore?.getAllCats() ?? []}
          favoriteIds={catsStore?.getFavoriteIds() ?? new Set()}
        />
      </div>
      <div ref={loadMoreRef} className={styles.loadMoreCats}>
        <span>... загружаем еще котиков ...</span>
      </div>
    </div>
  );
});

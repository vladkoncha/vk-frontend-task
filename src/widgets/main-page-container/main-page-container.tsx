'use client';

import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useRef } from 'react';

import { CatsContext } from '@/src/app/store/cats-provider';
import { CatsGrid } from '@/src/entitites/cats-grid';
import { fetchCats } from '@/src/features/fetch-cats';
import { useFetch } from '@/src/shared/hooks/useFetch';
import { useObserver } from '@/src/shared/hooks/useObserver';

import styles from './styles.module.scss';
import { MainPageContainerProps } from './types';

export const MainPageContainer = observer(
  ({ initialCats }: MainPageContainerProps) => {
    const catsStore = useContext(CatsContext);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      catsStore?.addCats(initialCats);
    }, [catsStore, initialCats]);

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
          <CatsGrid cats={catsStore?.getAllCats() ?? []} />
        </div>
        <div ref={loadMoreRef} className={styles.loadMoreCats}>
          <span>... загружаем еще котиков ...</span>
        </div>
      </div>
    );
  }
);

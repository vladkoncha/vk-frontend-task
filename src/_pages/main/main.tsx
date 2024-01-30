import { CatsGrid } from '@/src/entitites/cats-grid';
import { fetchCats } from '@/src/features/fetch-cats';

import styles from './styles.module.scss';

export const MainPage = async () => {
  const cats = await fetchCats();

  console.log(cats);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.main}>
        <CatsGrid cats={cats} />
      </div>
    </div>
  );
};

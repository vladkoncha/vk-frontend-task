import { observer } from 'mobx-react-lite';

import { CatCard } from '@/src/entitites/cat-card';
import { FavoriteButton } from '@/src/features/favorite-button';

import styles from './styles.module.scss';
import { CatsGridProps } from './types';

export const CatsGrid = observer(({ cats, favoriteIds }: CatsGridProps) => {
  return (
    <div className={styles.catsGrid}>
      {cats.map((cat) => (
        <div key={cat.id} className={styles.cardWrapper}>
          <CatCard cat={cat} />
          <div className={styles.favoriteButtonContainer}>
            <FavoriteButton
              catId={cat.id}
              isFavorite={favoriteIds.has(cat.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
});

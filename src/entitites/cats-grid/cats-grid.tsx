import styles from './styles.module.scss';
import { CatsGridProps } from './types';
import { CatCard } from './ui/cat-card';

export const CatsGrid = ({ cats }: CatsGridProps) => {
  return (
    <div className={styles.catsGrid}>
      {cats.map((cat) => (
        <CatCard key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

import Image from 'next/image';

import styles from './styles.module.scss';
import { CatCardProps } from './types';

export const CatCard = ({ cat }: CatCardProps) => {
  return (
    <div className={styles.catCard}>
      <Image
        sizes="100%"
        fill
        style={{
          objectFit: 'cover',
        }}
        src={cat.url}
        alt=""
      />
    </div>
  );
};

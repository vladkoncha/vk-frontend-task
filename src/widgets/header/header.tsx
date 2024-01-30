import styles from './styles.module.scss';
import { HeaderLink } from './ui/header-link';

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <HeaderLink href="/">Все котики</HeaderLink>
          <HeaderLink href="/favorites">Любимые котики</HeaderLink>
        </div>
      </div>
    </div>
  );
};

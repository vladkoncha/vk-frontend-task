'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.scss';
import { HeaderLinkProps } from './types';

export const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(styles.headerLink, {
        [styles.active]: pathname === href,
      })}
    >
      {children}
    </Link>
  );
};

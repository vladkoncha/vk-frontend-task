import Image from 'next/image';

import { CatCardProps } from './types';

export const CatCard = ({ cat }: CatCardProps) => {
  return (
    <div>
      <Image src={cat.url} width={cat.width} height={cat.height} alt="" />
    </div>
  );
};

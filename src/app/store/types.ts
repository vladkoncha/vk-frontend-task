import { ReactNode } from 'react';

import { Cat } from '@/src/shared/models';

export interface CatsProviderProps {
  initialCats: Cat[];
  children: ReactNode;
}

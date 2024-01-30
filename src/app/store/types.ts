import { ReactNode } from 'react';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CatsProviderProps {
  initialCats: Cat[];
  children: ReactNode;
}

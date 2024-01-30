'use client';

import { createContext } from 'react';

import CatsStore from './cats-store';
import { CatsProviderProps } from './types';

export const CatsContext = createContext<CatsStore | null>(null);

export function CatsProvider({ initialCats, children }: CatsProviderProps) {
  const catsStore = new CatsStore(initialCats);

  return (
    <CatsContext.Provider value={catsStore}>{children}</CatsContext.Provider>
  );
}

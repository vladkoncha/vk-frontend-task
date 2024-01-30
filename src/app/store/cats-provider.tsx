'use client';

import { createContext } from 'react';

import CatsStore from './cats-store';
import { CatsProviderProps } from './types';

export function CatsProvider({ initialCats, children }: CatsProviderProps) {
  const catsStore = new CatsStore(initialCats);

  const Context = createContext<CatsStore>(catsStore);

  return <Context.Provider value={catsStore}>{children}</Context.Provider>;
}

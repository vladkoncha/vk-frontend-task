'use client';

import { createContext } from 'react';

import CatsStore from './cats-store';
import { CatsProviderProps } from './types';

export const CatsContext = createContext<CatsStore | null>(null);
const catsStore = new CatsStore();

export function CatsProvider({ children }: CatsProviderProps) {
  return (
    <CatsContext.Provider value={catsStore}>{children}</CatsContext.Provider>
  );
}

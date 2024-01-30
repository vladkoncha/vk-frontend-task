import { Cat } from '@/src/shared/models';

export interface CatsGridProps {
  cats: Cat[];
  favoriteIds: Set<Cat['id']>;
}

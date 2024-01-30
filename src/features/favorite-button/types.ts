import { Cat } from '@/src/shared/models';

export interface FavoriteButtonProps {
  catId: Cat['id'];
  isFavorite: boolean;
}

import { makeAutoObservable } from 'mobx';

import { Cat } from '@/src/shared/models';

export default class CatsStore {
  private cats = new Map<Cat['id'], Cat>();
  private favoriteIds = new Set<Cat['id']>();

  constructor() {
    makeAutoObservable(this);
  }

  addCats(newCats: Cat[]) {
    newCats.forEach((cat) => this.cats.set(cat.id, cat));
  }

  getAllCats() {
    return [...this.cats.values()];
  }

  addFavorite(id: Cat['id']) {
    this.favoriteIds.add(id);
  }

  removeFavorite(id: Cat['id']) {
    this.favoriteIds.delete(id);
  }

  getFavoriteIds() {
    return this.favoriteIds;
  }

  getFavorites() {
    const favoriteCats: Cat[] = [];
    this.favoriteIds.forEach((id) => {
      const cat = this.cats.get(id);
      cat && favoriteCats.push(cat);
    });

    return favoriteCats;
  }
}

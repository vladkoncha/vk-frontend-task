import { makeAutoObservable } from 'mobx';

import { Cat } from './types';

export default class CatsStore {
  private cats = new Map<Cat['id'], Cat>();
  private favoriteIds = new Set<Cat['id']>();

  constructor(initialCats: Cat[]) {
    makeAutoObservable(this);

    this.addCats(initialCats);
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

  getFavorites() {
    const favoriteCats: Cat[] = [];
    this.favoriteIds.forEach((id) => {
      const cat = this.cats.get(id);
      cat && favoriteCats.push(cat);
    });

    return favoriteCats;
  }
}

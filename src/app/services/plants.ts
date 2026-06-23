import { effect, Service, signal } from '@angular/core';
import { Plant, PLANTS } from '../../data';

@Service()
export class Plants {
  readonly catalog = PLANTS;

  readonly bookmarkedNames = signal(new Set<string>());

  constructor() {
    effect(() => {
      localStorage.setItem('bookmarked', JSON.stringify(Array.from(this.bookmarkedNames())));
    });
    this.loadBookmarkedFromStorage()
  }

  private loadBookmarkedFromStorage(): void {
    const names = localStorage.getItem('bookmarked');
    if (names) {
      this.bookmarkedNames.set(new Set(JSON.parse(names)));
    }
  }

  isBookmarked(plant: Plant): boolean {
    return this.bookmarkedNames().has(plant.name);
  }

  toggleBookmark(plant: Plant): void {
    this.bookmarkedNames.update((names) => {
      const next = new Set(names);
      if (next.has(plant.name)) {
        next.delete(plant.name);
      } else {
        next.add(plant.name);
      }
      return next;
    });
  }

  isSeeding(plant: Plant, month: number): boolean {
    return this.inRange(month, plant.seed);
  }

  isHarvesting(plant: Plant, month: number): boolean {
    return this.inRange(month, plant.harvest);
  }

  private inRange(month: number, { start, end }: Plant['seed']): boolean {
    return end >= start ? month >= start && month <= end : month >= start || month <= end;
  }
}

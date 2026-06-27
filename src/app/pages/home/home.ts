import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { SplitAreaComponent, SplitComponent } from 'angular-split';
import { NgOptimizedImage } from '@angular/common';
import { PlantCalendar } from '../../components/plant-calendar/plant-calendar';
import { Plants } from '../../services/plants';
import { debounceTime } from 'rxjs';
import { LucideCircleAlert, LucideCircleX, LucideInfo, LucideLightbulb } from '@lucide/angular';
import { Plant } from '../../../data';

@Component({
  selector: 'app-home',
  imports: [
    PlantCalendar,
    SplitAreaComponent,
    SplitComponent,
    FormField,
    NgOptimizedImage,
    LucideCircleX,
    LucideLightbulb,
    LucideInfo,
    LucideCircleAlert,
  ],
  templateUrl: './home.html',
  styles: `
    :host {
      --as-gutter-background-color: #999;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly ps = inject(Plants);

  protected readonly filter = form(
    signal({
      search: '',
      onlyBookmarked: this.ps.bookmarkedNames().size > 0,
      onlyHarvestable: false,
      onlySeedable: false,
    }),
  );

  private readonly currentMonth = signal(new Date().getMonth() + 1);
  protected detailPlant = signal<Plant | undefined>(undefined);

  protected readonly filteredPlants = computed(() => {
    const { search, onlyBookmarked, onlyHarvestable, onlySeedable } = this.filter().value();
    const term = search.toLowerCase().trim();
    const month = this.currentMonth();

    return this.ps.catalog
      .filter((plant) => {
        if (onlyBookmarked && !this.ps.isBookmarked(plant)) return false;
        if (term && !plant.name.toLowerCase().includes(term)) return false;
        if (onlyHarvestable && !this.ps.inRange(month, plant.harvest)) return false;
        if (onlySeedable && !this.ps.inRange(month, plant.seed)) return false;

        return true;
      })
      .toSorted((a, b) => a.name.localeCompare(b.name));
  });
  protected readonly debounceTime = debounceTime;
}

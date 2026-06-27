import { ChangeDetectionStrategy, Component, inject, input, model, signal } from '@angular/core';
import { Plant } from '../../../data';
import { Plants } from '../../services/plants';
import { LucideBookmark } from '@lucide/angular';

const MONTHS: ReadonlyArray<{ label: string; value: number }> = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
].map((label, index) => ({ label, value: index + 1 }));

@Component({
  selector: 'app-plant-calendar',
  imports: [LucideBookmark],
  templateUrl: './plant-calendar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantCalendar {
  readonly plants = input.required<Plant[]>();
  readonly detailPlant = model.required<Plant | undefined>();

  protected readonly ps = inject(Plants);
  protected readonly months = MONTHS;
  protected readonly currentMonth = signal(new Date().getMonth() + 1);
}

export type MonthRange = {
  start: number;
  end: number;
};

export type Plant = {
  name: string;
  seed: MonthRange;
  harvest: MonthRange;
};

export const PLANTS: readonly Plant[] = [
  { name: 'Tomate', seed: { start: 2, end: 3 }, harvest: { start: 6, end: 9 } },
  { name: 'Salatgurke', seed: { start: 3, end: 4 }, harvest: { start: 6, end: 8 } },
  { name: 'Zucchini', seed: { start: 3, end: 4 }, harvest: { start: 6, end: 9 } },
  { name: 'Paprika', seed: { start: 1, end: 2 }, harvest: { start: 7, end: 9 } },
  { name: 'Karotte', seed: { start: 2, end: 5 }, harvest: { start: 5, end: 9 } },
  { name: 'Radieschen', seed: { start: 2, end: 8 }, harvest: { start: 3, end: 9 } },
  { name: 'Eisbergsalat', seed: { start: 2, end: 6 }, harvest: { start: 5, end: 9 } },
  { name: 'Feldsalat', seed: { start: 7, end: 8 }, harvest: { start: 9, end: 11 } },
  { name: 'Kohlrabi', seed: { start: 2, end: 6 }, harvest: { start: 4, end: 9 } },
  { name: 'Buschbohne', seed: { start: 4, end: 6 }, harvest: { start: 6, end: 9 } },
  { name: 'Erbse', seed: { start: 2, end: 4 }, harvest: { start: 5, end: 7 } },
  { name: 'Zwiebel', seed: { start: 2, end: 3 }, harvest: { start: 6, end: 7 } },
  { name: 'Knoblauch', seed: { start: 9, end: 10 }, harvest: { start: 6, end: 7 } },
  { name: 'Spinat', seed: { start: 2, end: 3 }, harvest: { start: 3, end: 5 } },
  { name: 'Rote Bete', seed: { start: 3, end: 5 }, harvest: { start: 6, end: 9 } },
  { name: 'Kartoffel', seed: { start: 3, end: 4 }, harvest: { start: 5, end: 9 } },
  { name: 'Brokkoli', seed: { start: 2, end: 5 }, harvest: { start: 5, end: 9 } },
  { name: 'Blumenkohl', seed: { start: 2, end: 5 }, harvest: { start: 5, end: 9 } },
  { name: 'Lauch', seed: { start: 2, end: 4 }, harvest: { start: 7, end: 11 } },
  { name: 'Hokkaido-Kürbis', seed: { start: 3, end: 4 }, harvest: { start: 8, end: 9 } },
  { name: 'Erdbeere', seed: { start: 2, end: 4 }, harvest: { start: 4, end: 6 } },
  { name: 'Himbeere', seed: { start: 9, end: 10 }, harvest: { start: 5, end: 9 } },
  { name: 'Heidelbeere', seed: { start: 2, end: 3 }, harvest: { start: 6, end: 8 } },
  { name: 'Johannisbeere', seed: { start: 9, end: 10 }, harvest: { start: 5, end: 6 } },
  { name: 'Brombeere', seed: { start: 3, end: 4 }, harvest: { start: 7, end: 9 } },
] satisfies Plant[];

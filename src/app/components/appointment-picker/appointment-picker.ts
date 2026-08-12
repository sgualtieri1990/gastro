import { Component, computed, model, signal } from '@angular/core';

interface CalendarCell {
  key: string;
  date: Date;
  label: number;
  inMonth: boolean;
  disabled: boolean;
  selected: boolean;
  today: boolean;
}

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

const TIME_SLOTS = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
];

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

@Component({
  selector: 'app-appointment-picker',
  imports: [],
  templateUrl: './appointment-picker.html',
  styleUrl: './appointment-picker.css',
})
export class AppointmentPicker {
  readonly selectedDate = model<Date | null>(null);
  readonly selectedTime = model<string | null>(null);

  readonly weekdays = WEEKDAYS;
  readonly timeSlots = TIME_SLOTS;

  private readonly viewMonth = signal(this.startOfMonth(new Date()));
  private readonly maxDate = addDays(startOfDay(new Date()), 84);

  readonly monthLabel = computed(() => {
    const view = this.viewMonth();
    return `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;
  });

  readonly canGoPrev = computed(() => {
    const todayMonth = this.startOfMonth(new Date());
    return this.viewMonth().getTime() > todayMonth.getTime();
  });

  readonly canGoNext = computed(() => {
    const maxMonth = this.startOfMonth(this.maxDate);
    return this.viewMonth().getTime() < maxMonth.getTime();
  });

  readonly calendarCells = computed(() => {
    const view = this.viewMonth();
    const selected = this.selectedDate();
    const today = startOfDay(new Date());
    const firstOfMonth = new Date(view.getFullYear(), view.getMonth(), 1);
    const startOffset = (firstOfMonth.getDay() + 6) % 7;
    const gridStart = addDays(firstOfMonth, -startOffset);
    const cells: CalendarCell[] = [];

    for (let index = 0; index < 42; index += 1) {
      const date = addDays(gridStart, index);
      const inMonth = date.getMonth() === view.getMonth();
      const disabled = !inMonth || this.isUnavailable(date, today);
      cells.push({
        key: date.toISOString(),
        date,
        label: date.getDate(),
        inMonth,
        disabled,
        selected: selected ? isSameDay(date, selected) : false,
        today: isSameDay(date, today),
      });
    }

    return cells;
  });

  readonly formattedSelection = computed(() => {
    const date = this.selectedDate();
    const time = this.selectedTime();
    if (!date || !time) {
      return '';
    }

    return `${date.toLocaleDateString('de-DE', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })} · ${time} Uhr`;
  });

  prevMonth(): void {
    if (!this.canGoPrev()) {
      return;
    }
    const view = this.viewMonth();
    this.viewMonth.set(new Date(view.getFullYear(), view.getMonth() - 1, 1));
  }

  nextMonth(): void {
    if (!this.canGoNext()) {
      return;
    }
    const view = this.viewMonth();
    this.viewMonth.set(new Date(view.getFullYear(), view.getMonth() + 1, 1));
  }

  pickDate(date: Date): void {
    if (this.isUnavailable(date, startOfDay(new Date()))) {
      return;
    }

    this.selectedDate.set(startOfDay(date));
    this.selectedTime.set(null);
  }

  pickTime(time: string): void {
    this.selectedTime.set(time);
  }

  private isUnavailable(date: Date, today: Date): boolean {
    const day = startOfDay(date);
    const isWeekend = day.getDay() === 0 || day.getDay() === 6;
    return day < today || day > this.maxDate || isWeekend;
  }

  private startOfMonth(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }
}

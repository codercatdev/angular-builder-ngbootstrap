import { Component } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  template: `
    <ngb-datepicker
      #dp
      [(ngModel)]="model"
      (navigate)="date = $event.next"
    ></ngb-datepicker>
  `,
  styles: [],
})
export class DatepickerComponent {
  model: NgbDateStruct | undefined;
  date: { year: number; month: number } | undefined;

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-datepicker',
  name: 'ngb datepicker',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'isCollapsed',
      type: 'boolean',
    },
  ],
})(DatepickerComponent);

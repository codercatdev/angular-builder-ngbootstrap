import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <p>
      <ngb-alert [type]="type" [dismissible]="dismissable">
        <strong>{{ alert }}</strong> {{ text }}
      </ngb-alert>
    </p>
  `,
  styles: [],
})
export class AlertComponent implements OnInit {
  @Input() type = 'warning';
  @Input() dismissable = true;
  @Input() alert = 'Warning!';
  @Input() text = `Better check yourself, you're not looking too
  good.`;

  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-alert',
  name: 'ngb alert',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'type',
      defaultValue: 'success',
      type: 'enum',
      enum: [
        'success',
        'info',
        'warning',
        'danger',
        'primary',
        'secondary',
        'light',
        'dark',
      ],
    },
    {
      name: 'dismissable',
      type: 'boolean',
    },
    {
      name: 'alert',
      type: 'string',
    },
    {
      name: 'text',
      type: 'string',
    },
  ],
})(AlertComponent);

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="btn btn-outline-primary" routerLink="/">Go Home</button>
  `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'ngb-button',
  name: 'ngb button',
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
})(ButtonComponent);

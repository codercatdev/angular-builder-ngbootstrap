import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="btn"
      [ngClass]="'btn' + ' ' + type + ' ' + size"
      [disabled]="disabled"
    >
      {{ text }}
    </button>
  `,
  styles: [],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() type = 'btn-outline-primary';
  @Input() size = '';
  @Input() disabled = false;
  @Input() text = 'Hello';
  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-button',
  name: 'ngb button',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'type',
      defaultValue: 'btn-outline-primary',
      type: 'enum',
      enum: [
        'btn-outline-primary',
        'btn-outline-secondary',
        'btn-outline-success',
        'btn-outline-danger',
        'btn-outline-warning',
        'btn-outline-info',
        'btn-outline-light',
        'btn-outline-dark',
        'btn-primary',
        'btn-secondary',
        'btn-success',
        'btn-danger',
        'btn-warning',
        'btn-info',
        'btn-light',
        'btn-dark',
      ],
    },
    {
      name: 'size',
      defaultValue: 'btn-md',
      type: 'enum',
      enum: ['btn-md', 'btn-sm', 'btn-lg', 'btn-block'],
    },
    {
      name: 'disabled',
      type: 'boolean',
    },
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Hello',
    },
  ],
})(ButtonComponent);

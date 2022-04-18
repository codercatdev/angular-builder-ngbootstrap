import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <div ngbDropdown class="d-inline-block" [placement]="placement">
      <button
        type="button"
        class="btn btn-outline-primary"
        id="dropdownBasic1"
        ngbDropdownToggle
      >
        {{ text }}
      </button>
      <div ngbDropdownMenu aria-labelledby="dropdownBasic1">
        <button ngbDropdownItem *ngFor="let item of items">
          {{ item.title }}
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class DropdownComponent implements OnInit {
  @Input() text = 'Toggle Dropdown';
  @Input() items: { title: string }[] | undefined;
  @Input() placement = '-';

  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-dropdown',
  name: 'ngb dropdown',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'text',
      type: 'string',
      defaultValue: 'Hello',
    },
    {
      name: 'items',
      defaultValue: [
        {
          title: 'Action 1',
        },
        {
          title: 'Action 1',
        },
      ],
      type: 'list',
      subFields: [
        { name: 'title', type: 'string', defaultValue: 'Default Action' },
      ],
    },
    {
      name: 'placement',
      defaultValue: '-',
      type: 'enum',
      enum: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
    },
  ],
})(DropdownComponent);

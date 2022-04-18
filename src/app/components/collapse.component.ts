import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  template: `
    <div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
      <div class="card">
        <div class="card-body">
          You can collapse this card by clicking Toggle
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CollapseComponent implements OnInit {
  @Input() isCollapsed = false;

  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-collapse',
  name: 'ngb collapse',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'isCollapsed',
      type: 'boolean',
    },
  ],
})(CollapseComponent);

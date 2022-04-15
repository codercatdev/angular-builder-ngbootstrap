import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css'],
})
export class RouterLinkComponent implements OnInit {
  @Input() link = '/';
  @Input() text = 'Example';
  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'custom-router-link',
  name: 'CustomRouterLink',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'link',
      type: 'string',
    },
    {
      name: 'text',
      type: 'string',
    },
  ],
})(RouterLinkComponent);

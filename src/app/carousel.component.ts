import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <ngb-carousel *ngIf="images">
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="images[0]" alt="Random first slide" />
        </div>
        <div class="carousel-caption">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </ng-template>
      <ng-template ngbSlide>
        <div class="picsum-img-wrapper">
          <img [src]="images[1]" alt="Random second slide" />
        </div>
        <div class="carousel-caption">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </ng-template>
      <ng-template ngbSlide> </ng-template
    ></ngb-carousel>
  `,
  styles: [],
})
export class CarouselComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {}

  ngOnInit(): void {}
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'ngb-carousel',
  name: 'ngb carousel',
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
})(CarouselComponent);

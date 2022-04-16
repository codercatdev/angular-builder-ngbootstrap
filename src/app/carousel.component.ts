import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <ngb-carousel *ngIf="slides && slides.length > 0">
      <ng-template ngbSlide *ngFor="let slide of slides">
        <div class="picsum-img-wrapper">
          <img [src]="slide?.image" alt="Random first slide" />
        </div>
        <div class="carousel-caption">
          <h3>{{ slide?.title }}</h3>
          <p>{{ slide?.description }}</p>
        </div>
      </ng-template>
    </ngb-carousel>
    {{ slides | json }}
  `,
  styles: [],
})
export class CarouselComponent implements OnInit {
  @Input() slides = [
    {
      title: 'Default Title',
      description: 'Default Desc',
      image: 'https://picsum.photos/id/944/900/500',
    },
  ];
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
      name: 'slides',
      defaultValue: [
        {
          title: 'First Slide Label',
          description: 'Desc Slide 1',
          image: 'https://picsum.photos/id/1011/900/500',
        },
        {
          title: 'Second Slide Label',
          description: 'Desc Slide 2',
          image: 'https://picsum.photos/id/1012/900/500',
        },
      ],
      type: 'list',
      subFields: [
        { name: 'title', type: 'string', defaultValue: 'First Slide Label' },
        { name: 'description', type: 'string', defaultValue: 'Desc Slide 1' },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png'],
          defaultValue: 'https://picsum.photos/id/944/900/500',
        },
      ],
    },
  ],
})(CarouselComponent);

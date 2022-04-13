import { RouterLinkComponent } from './components/router-link/router-link.component';
import { AlertComponent } from './components/alert/alert.component';
import { Component } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

export class CustomThing {
  name = '';
}

BuilderBlock({
  tag: 'custom-alert',
  name: 'CustomAlertComponent',
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-builder-ngbootstrap';
}

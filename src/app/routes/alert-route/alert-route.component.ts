import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-route',
  templateUrl: './alert-route.component.html',
  styleUrls: ['./alert-route.component.css'],
})
export class AlertRouteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  load(event: any) {
    console.log('load', event);
  }

  error(event: any) {
    console.log('error', event);
  }
}

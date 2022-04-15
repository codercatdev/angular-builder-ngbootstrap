import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  missing = false;
  ngOnInit(): void {}
  load(event: any) {
    console.log('load', event);
    this.missing = event == undefined ? true : false;
  }
  route(event: any) {
    console.log('route', event);
  }
  error(event: any) {
    console.log('error', event);
  }
}

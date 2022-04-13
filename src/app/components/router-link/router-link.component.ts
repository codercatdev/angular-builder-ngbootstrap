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

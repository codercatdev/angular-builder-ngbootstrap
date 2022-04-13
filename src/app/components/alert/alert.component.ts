import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() type = 'warning';
  @Input() dismissable = true;
  @Input() alert = 'Warning!';
  @Input() text = `Better check yourself, you're not looking too
  good.`;

  constructor() {}

  ngOnInit(): void {}
}

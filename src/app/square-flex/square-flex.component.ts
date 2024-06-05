import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrls: ['./square-flex.component.css']
})
export class SquareFlexComponent {
  @Input() divWidth = 400;
  @Input() divHeight = 400;
}

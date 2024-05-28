import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  counter: number = 0;
  @Input() step: number = 1;

  decrease() {
    if (this.counter-this.step >= 0 ) {
      this.counter = this.counter - this.step;
    }
  }

  increase() {
    if (this.counter < 100 ) {
      this.counter = this.counter + this.step;
    }
  }
}

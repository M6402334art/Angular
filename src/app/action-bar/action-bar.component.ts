import { Component } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {
  counter: number = 0
  decrease() {
    if (this.counter-1 >= 0 ) {
      this.counter--
    }
  }

  increase() {
    if (this.counter-1 <= 100 ) {
      this.counter++
    }
  }
}

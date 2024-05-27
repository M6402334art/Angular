import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'api';
  // ninjaName = 'Naruto';

  // ninjaConsole() {
  //   console.log('Naruto is the best ninja');
  // }

  // changeNinjaName(name: string) {
  //   this.ninjaName = name;
  // }
  value = 0
  callBuffet(value: string) {
    const price = +value
    this.value = (price*3)/4
  }
}

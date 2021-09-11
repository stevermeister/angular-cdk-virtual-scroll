import { Component } from '@angular/core';
import { emojis } from './emojis'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: string[] = [];

  constructor() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(emojis[Math.floor(Math.random() * emojis.length)]);
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  powers: number[] = [];
  initPower: number;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 100; i++) {
      this.powers.push(i);
    }
  }

  onSubmit() {
    // this.initPower = power;
  }
}

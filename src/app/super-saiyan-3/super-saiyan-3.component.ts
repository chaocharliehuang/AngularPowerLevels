import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-3',
  templateUrl: './super-saiyan-3.component.html',
  styleUrls: ['./super-saiyan-3.component.css']
})
export class SuperSaiyan3Component implements OnInit {
  @Input() initPower: number;
  
  constructor() { }

  ngOnInit() {
  }

}

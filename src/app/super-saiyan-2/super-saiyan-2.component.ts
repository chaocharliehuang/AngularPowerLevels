import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-2',
  templateUrl: './super-saiyan-2.component.html',
  styleUrls: ['./super-saiyan-2.component.css']
})
export class SuperSaiyan2Component implements OnInit {
  @Input() initPower: number;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-saiyan-4',
  templateUrl: './super-saiyan-4.component.html',
  styleUrls: ['./super-saiyan-4.component.css']
})
export class SuperSaiyan4Component implements OnInit {
  @Input() initPower: number;
  
  constructor() { }

  ngOnInit() {
  }

}

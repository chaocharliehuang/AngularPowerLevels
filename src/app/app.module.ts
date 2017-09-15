import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SuperSaiyanComponent } from './super-saiyan/super-saiyan.component';
import { SuperSaiyan2Component } from './super-saiyan-2/super-saiyan-2.component';
import { SuperSaiyan3Component } from './super-saiyan-3/super-saiyan-3.component';
import { SuperSaiyan4Component } from './super-saiyan-4/super-saiyan-4.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    SaiyanComponent,
    SuperSaiyanComponent,
    SuperSaiyan2Component,
    SuperSaiyan3Component,
    SuperSaiyan4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketListComponent } from './pocket-list/pocket-list.component';
import { PocketCardComponent } from './pocket-card/pocket-card.component';


@NgModule({
  declarations: [
    PocketListComponent,
    PocketCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PocketListComponent
  ]
})
export class PocketModule { }

import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HeaderComponent } from './layout/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
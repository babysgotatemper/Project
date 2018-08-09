import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import {RouterModule} from "@angular/router";
import {MatCardModule, MatListModule, MatSidenavModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterModule.forChild([
      { path: 'material', component: MaterialComponent}
    ])
  ],
  declarations: [
    MaterialComponent
  ]
})
export class PagesModule { }

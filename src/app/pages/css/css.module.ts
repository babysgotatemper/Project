import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleGroup, MatButtonToggleModule} from '@angular/material';
import {CssComponent} from './css.component';
import {RouterModule} from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CssComponent, children: [
          {path: '', redirectTo: 'properties'},
          {path: 'properties', component: PropertiesComponent},
        ],
      },
    ]),
  ],
  declarations: [
    CssComponent,
    PropertiesComponent,
  ]
})
export class CssModule { }

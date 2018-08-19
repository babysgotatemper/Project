import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCardModule, MatListModule, MatSidenavModule} from '@angular/material';
import { GistComponent } from './gist/gist.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      { path: 'material', component: MaterialComponent}
    ])
  ],
  declarations: [
    MaterialComponent,
    GistComponent
  ]
})
export class PagesModule { }

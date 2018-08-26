import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material/material.component';
import {RouterModule} from '@angular/router';
import {
  MatButtonModule,
  MatCardModule,
  MatCommonModule,
  MatListModule,
  MatSidenavModule, MatTab, MatTabContent,
  MatTabGroup, MatTabLabel, MatTabLink, MatTabNav,
  MatTabsModule
} from '@angular/material';
import { GistComponent } from './gist/gist.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatCommonModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forChild([
      { path: 'material', component: MaterialComponent},
      { path: 'css', loadChildren: './css/css.module#CssModule'}
    ])
  ],
  declarations: [
    MaterialComponent,
    GistComponent
  ]
})
export class PagesModule { }

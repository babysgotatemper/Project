import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HtmlComponent} from './html.component';
import { RouterModule} from '@angular/router';
import { DomComponent } from './components/dom/dom.component';
import {MatTabsModule} from '@angular/material';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule.forChild([
      {
        path: '', component: HtmlComponent, children: [
          {path: '', redirectTo: 'dom'},
          {path: 'dom', component: DomComponent},
          {path: 'tags', component: TagsComponent},
        ]
      }
    ])
  ],
  declarations: [
    HtmlComponent,
    DomComponent,
    TagsComponent
  ]
})
export class HtmlModule { }

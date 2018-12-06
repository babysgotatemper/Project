import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlComponent} from './html.component';
import { RouterModule} from '@angular/router';
import { DomComponent } from './components/dom/dom.component';
import { TagsComponent } from './components/tags/tags.component';
import { CustomMaterialModule} from '../../shared/custom-material/custom-material.module';
import { SharedModule} from '../../shared/shared.module';
import { TablesComponent } from './components/tables/tables.component';
import { CommentsComponent } from './components/comments/comments.component';
import {SymbolsComponent} from './components/symbols/symbols.component';
import { InspectorComponent } from './components/inspector/inspector.component';
import { FormTagsComponent } from './components/form-tags/form-tags.component';
import { ValidationComponent } from './components/validation/validation.component';
import { RedactorComponent } from './components/redactor/redactor.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: HtmlComponent, children: [
          {path: '', redirectTo: 'dom'},
          {path: 'dom', component: DomComponent},
          {path: 'tags', component: TagsComponent},
          {path: 'tables', component: TablesComponent},
          {path: 'comments', component: CommentsComponent},
          {path: 'symbols', component: SymbolsComponent},
          {path: 'inspector', component: InspectorComponent},
          {path: 'forms', component: FormTagsComponent},
          {path: 'validation', component: ValidationComponent},
          {path: 'redactor', component: RedactorComponent},
        ]
      }
    ])
  ],
  declarations: [
    HtmlComponent,
    DomComponent,
    TagsComponent,
    TablesComponent,
    CommentsComponent,
    SymbolsComponent,
    InspectorComponent,
    FormTagsComponent,
    ValidationComponent,
    RedactorComponent,
  ]
})
export class HtmlModule { }

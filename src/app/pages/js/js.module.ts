import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../../shared/custom-material/custom-material.module';
import {RouterModule} from '@angular/router';
import {JsComponent} from './js.component';
import { JqueryComponent } from './components/jquery/jquery.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: JsComponent, children: [
          {path: '', redirectTo: 'jquery'},
          {path: 'jquery', component: JqueryComponent},
        ]
      }
    ])
  ],
  declarations: [
    JsComponent,
    JqueryComponent,
  ]
})
export class JsModule { }

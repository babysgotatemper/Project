import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { GitComponent } from './git/git.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule.forChild([
      { path: '', component: CoursesComponent},
      { path: 'css', loadChildren: './css/css.module#CssModule'},
      { path: 'html', loadChildren: './html/html.module#HtmlModule'},
      { path: 'js', loadChildren: './js/js.module#JsModule'},
      { path: 'git', component: GitComponent},
    ])
  ],
  declarations: [
    CoursesComponent,
    GitComponent,
  ]
})
export class PagesModule { }

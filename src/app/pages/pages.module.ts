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
      { path: 'css', loadChildren: () => import('./css/css.module').then(m => m.CssModule)},
      { path: 'html', loadChildren: () => import('./html/html.module').then(m => m.HtmlModule)},
      { path: 'js', loadChildren: () => import('./js/js.module').then(m => m.JsModule)},
      { path: 'git', component: GitComponent},
    ])
  ],
  declarations: [
    CoursesComponent,
    GitComponent,
  ]
})
export class PagesModule { }

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NgModel} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HtmlComponent} from './pages/html/html.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'html', component: HtmlComponent},
  {path: '**', redirectTo: ''},
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

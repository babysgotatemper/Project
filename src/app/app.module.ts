import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'courses', loadChildren: './pages/pages.module#PagesModule'},
      {path: 'template', component: TemplateComponent},
      {path: '**', redirectTo: ''},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

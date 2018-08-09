import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HtmlComponent } from './pages/html/html.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { CssComponent } from './pages/css/css.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent,
    TemplateComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'html', component: HtmlComponent},
      {path: 'css', component: CssComponent},
      {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
      {path: 'template', component: TemplateComponent},
      {path: '**', redirectTo: ''},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

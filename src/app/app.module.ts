import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { HtmlComponent } from './pages/html/html.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HtmlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'html', component: HtmlComponent},
      {path: '**', redirectTo: ''},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TagComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TagComponent,
  ]
})
export class SharedModule { }

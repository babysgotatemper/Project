import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

const SHARED_INSTANCES = [
  MatSidenavModule,
  MatCardModule,
  MatCommonModule,
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatTabsModule,
  MatFormFieldModule,
  MatRadioModule,
];

@NgModule({
  imports: [
    CommonModule,
    SHARED_INSTANCES,
  ],
  exports: [
    SHARED_INSTANCES
  ],
})
export class CustomMaterialModule { }

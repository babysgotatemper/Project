import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCommonModule, MatFormFieldModule, MatInputModule,
  MatListModule, MatRadioModule,
  MatSidenavModule,
  MatTabsModule,
  MatTooltipModule
} from '@angular/material';

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

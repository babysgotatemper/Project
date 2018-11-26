import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CssComponent} from './css.component';
import {RouterModule} from '@angular/router';
import { PropertiesComponent } from './components/properties/properties.component';
import { LinkComponent } from './components/link/link.component';
import { BoxModelComponent } from './components/box-model/box-model.component';
import { PseudoComponent } from './components/pseudo/pseudo.component';
import { InheritComponent } from './components/inherit/inherit.component';
import { UnitsComponent } from './components/units/units.component';
import { ColorsComponent } from './components/colors/colors.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { PositionComponent } from './components/position/position.component';
import { FlexboxComponent } from './components/flexbox/flexbox.component';
import { Html5Css3Component } from './components/html5-css3/html5-css3.component';
import {MatSidenavModule, MatTabsModule} from '@angular/material';
import { CssAnimationsComponent } from './components/css-animations/css-animations.component';
import { ResetComponent } from './components/reset/reset.component';
import { VendorComponent } from './components/vendor/vendor.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    RouterModule.forChild([
      {
        path: '', component: CssComponent, children: [
          {path: '', redirectTo: 'properties'},
          {path: 'properties', component: PropertiesComponent},
          {path: 'link', component: LinkComponent},
          {path: 'box-model', component: BoxModelComponent},
          {path: 'pseudo', component: PseudoComponent},
          {path: 'inherit', component: InheritComponent},
          {path: 'units', component: UnitsComponent},
          {path: 'colors', component: ColorsComponent},
          {path: 'fonts', component: FontsComponent},
          {path: 'position', component: PositionComponent},
          {path: 'flexbox', component: FlexboxComponent},
          {path: 'html5-css3', component: Html5Css3Component},
          {path: 'animations', component: CssAnimationsComponent},
          {path: 'reset', component: ResetComponent},
          {path: 'vendor', component: VendorComponent},
        ],
      },
    ]),
  ],
  declarations: [
    CssComponent,
    PropertiesComponent,
    LinkComponent,
    BoxModelComponent,
    PseudoComponent,
    InheritComponent,
    UnitsComponent,
    ColorsComponent,
    FontsComponent,
    PositionComponent,
    FlexboxComponent,
    Html5Css3Component,
    CssAnimationsComponent,
    ResetComponent,
    VendorComponent,
  ]
})
export class CssModule { }

import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }        from '@angular/forms';
import { NzIconTestModule }   from 'ng-zorro-antd/icon/testing';
import { NzDropDownModule }   from 'ng-zorro-antd/dropdown';
import { AnimationComponent } from './animation.component';
import { NzButtonModule }     from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzIconTestModule,
    NzDropDownModule,
    NzButtonModule
  ],
  declarations: [
    AnimationComponent
  ],
  exports: [
    AnimationComponent
  ]
})
export class AnimationModule {
}

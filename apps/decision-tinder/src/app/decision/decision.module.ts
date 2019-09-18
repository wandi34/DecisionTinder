import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecisionComponent } from './decision.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../custom-material.module';

@NgModule({
  declarations: [DecisionComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    DecisionComponent
  ]
})
export class DecisionModule { }

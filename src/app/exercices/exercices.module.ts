import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { Ex01Component } from './ex01/ex01.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ExercicesComponent,
    Ex01Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ExercicesModule { }

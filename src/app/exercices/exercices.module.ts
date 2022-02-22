import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { Ex01Component } from './ex01/ex01.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Ex02Component } from './ex02/ex02.component';
import { Ex02aComponent } from './ex02/ex02a/ex02a.component';


@NgModule({
  declarations: [
    ExercicesComponent,
    Ex01Component,
    Ex02Component,
    Ex02aComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ExercicesModule { }

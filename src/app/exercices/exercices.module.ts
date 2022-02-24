import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { Ex01Component } from './ex01/ex01.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Ex02Component } from './ex02/ex02.component';
import { Ex02aComponent } from './ex02/ex02a/ex02a.component';
import { Ex03Component } from './ex03/ex03.component';


@NgModule({
  declarations: [
    ExercicesComponent,
    Ex01Component,
    Ex02Component,
    Ex02aComponent,
    Ex03Component
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExercicesModule { }

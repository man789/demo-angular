import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './exercices.component';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';

const routes: Routes = [
  {path : 'exercices', component : ExercicesComponent, children :[
    {path : 'ex01', component : Ex01Component },
    {path : "ex02", component : Ex02Component },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

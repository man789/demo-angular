import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicesComponent } from './exercices.component';
import { Ex01Component } from './ex01/ex01.component';

const routes: Routes = [
  {path : 'exercices', component : ExercicesComponent, children :[
    {path : 'ex01', component : Ex01Component },
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

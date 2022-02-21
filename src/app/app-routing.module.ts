import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ExercicesComponent } from './exercices/exercices.component';

const routes: Routes = [
  { path : 'demo', loadChildren : () => import("./demo/demo.module").then(m => m.DemoModule)},
  { path : 'exercices', loadChildren : () => import("./exercices/exercices.module").then(m => m.ExercicesModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

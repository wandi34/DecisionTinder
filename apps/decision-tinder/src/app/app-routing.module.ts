import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecisionComponent } from './decision/decision.component';



const routes: Routes = [
  {path: '', component: DecisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

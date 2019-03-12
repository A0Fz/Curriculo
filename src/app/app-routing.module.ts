import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HabComponent } from './hab/hab.component';
import { ExpComponent } from './exp/exp.component';
import { ResmComponent } from './resm/resm.component';

const routes: Routes = [
  {path: 'hab', component: HabComponent},
  {path: 'exp', component: ExpComponent},
  {path: 'resm', component: ResmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoodlesDashboardComponent } from './pages/noodles-dashboard/noodles-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: NoodlesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoodlesRoutingModule {}

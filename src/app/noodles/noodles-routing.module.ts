import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoodlesDashboardComponent } from './pages/noodles-dashboard/noodles-dashboard.component';
import { NoodlesInfoComponent } from './pages/noodles-info/noodles-info.component';
import { NoodlesComponent } from './pages/noodles/noodles.component';

const routes: Routes = [
  {
    path: '',
    component: NoodlesComponent,
    children: [
      { path: '', pathMatch: 'full', component: NoodlesDashboardComponent },
      { path: ':id', component: NoodlesInfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoodlesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ValidNoodleIdGuard } from './_guards/valid-noodle-id.guard';

import { NoodlesDashboardComponent } from './pages/noodles-dashboard/noodles-dashboard.component';
import { NoodlesInfoComponent } from './pages/noodles-info/noodles-info.component';
import { NoodlesComponent } from './pages/noodles/noodles.component';

const routes: Routes = [
  {
    path: '',
    component: NoodlesComponent,
    children: [
      { path: '', pathMatch: 'full', component: NoodlesDashboardComponent },
      {
        path: ':id',
        component: NoodlesInfoComponent,
        canActivate: [ValidNoodleIdGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoodlesRoutingModule {}

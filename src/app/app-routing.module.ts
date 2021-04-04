import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/noodles', pathMatch: 'full' },
  {
    path: 'noodles',
    loadChildren: () =>
      import('./noodles/noodles.module').then((m) => m.NoodlesModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

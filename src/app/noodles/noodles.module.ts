import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoodlesRoutingModule } from './noodles-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NoodlesDashboardComponent } from './pages/noodles-dashboard/noodles-dashboard.component';
import { NoodlesInfoComponent } from './pages/noodles-info/noodles-info.component';
import { NoodlesListComponent } from './components/noodles-list/noodles-list.component';
import { NoodlesCardComponent } from './components/noodles-card/noodles-card.component';
import { NoodlesFilterComponent } from './components/noodles-filter/noodles-filter.component';
import { NoodlesComponent } from './pages/noodles/noodles.component';

@NgModule({
  declarations: [
    NoodlesDashboardComponent,
    NoodlesInfoComponent,
    NoodlesListComponent,
    NoodlesCardComponent,
    NoodlesFilterComponent,
    NoodlesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NoodlesRoutingModule,
    SharedModule,
  ],
})
export class NoodlesModule {}

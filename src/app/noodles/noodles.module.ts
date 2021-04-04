import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NoodlesRoutingModule } from './noodles-routing.module';

import { NoodlesDashboardComponent } from './pages/noodles-dashboard/noodles-dashboard.component';

@NgModule({
  declarations: [NoodlesDashboardComponent],
  imports: [CommonModule, FontAwesomeModule, NoodlesRoutingModule],
})
export class NoodlesModule {}

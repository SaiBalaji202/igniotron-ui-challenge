import { Component, OnInit } from '@angular/core';
import { SortOption } from '@app/noodles/models/sort.model';
import { NoodlesFilterService } from './../../services/noodles-filter.service';

@Component({
  selector: 'igniotron-noodles-dashboard',
  templateUrl: './noodles-dashboard.component.html',
  styleUrls: ['./noodles-dashboard.component.scss'],
  providers: [NoodlesFilterService],
})
export class NoodlesDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

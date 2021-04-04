import { Component, OnInit } from '@angular/core';
import { SortOption } from '@app/noodles/models/sort.model';

@Component({
  selector: 'igniotron-noodles-dashboard',
  templateUrl: './noodles-dashboard.component.html',
  styleUrls: ['./noodles-dashboard.component.scss'],
})
export class NoodlesDashboardComponent implements OnInit {
  filterText = '';
  sortOption = SortOption.NONE;

  constructor() {}

  ngOnInit(): void {}

  updateFilter(value: string): void {
    this.filterText = value?.toLowerCase();
  }

  updateSortOption(value: SortOption): void {
    this.sortOption = value;
  }
}

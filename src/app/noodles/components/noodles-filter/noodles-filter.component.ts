import { Component, OnInit } from '@angular/core';
import { SortOption } from '@app/noodles/models/sort.model';
import { startWith } from 'rxjs/operators';
import { NoodlesFilterService } from './../../services/noodles-filter.service';

@Component({
  selector: 'igniotron-noodles-filter',
  templateUrl: './noodles-filter.component.html',
  styleUrls: ['./noodles-filter.component.scss'],
})
export class NoodlesFilterComponent implements OnInit {
  SortOption = SortOption;
  sortOptions = Object.values(SortOption);

  constructor(public filtersService: NoodlesFilterService) {}

  ngOnInit(): void {}

  onFilterChange(value: string): void {
    this.filtersService.setFilter('filterText', value?.trim());
  }

  onSort(sortOrder: string): void {
    this.filtersService.setFilter('sortOrder', sortOrder as SortOption);
  }
}

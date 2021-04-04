import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SortOption } from '@app/noodles/models/sort.model';

@Component({
  selector: 'igniotron-noodles-filter',
  templateUrl: './noodles-filter.component.html',
  styleUrls: ['./noodles-filter.component.scss'],
})
export class NoodlesFilterComponent implements OnInit {
  @Input() filterText = '';
  @Input() sortOrder = SortOption.DESCENDING;

  @Output() filter = new EventEmitter<string>();
  @Output() starSort = new EventEmitter<SortOption>();

  sortOptions = Object.values(SortOption);

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(value: string): void {
    this.filterText = value?.trim();
    this.filter.emit(this.filterText);
  }

  onSort(sortOrder: string): void {
    this.sortOrder = sortOrder as SortOption;
    this.starSort.emit(this.sortOrder);
  }
}

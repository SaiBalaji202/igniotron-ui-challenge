import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'igniotron-noodles-filter',
  templateUrl: './noodles-filter.component.html',
  styleUrls: ['./noodles-filter.component.scss'],
})
export class NoodlesFilterComponent implements OnInit {
  @Input() filterText = '';
  @Output() filter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(value: string): void {
    this.filterText = value?.trim();
    this.filter.emit(this.filterText);
  }
}

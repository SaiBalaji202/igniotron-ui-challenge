import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'igniotron-noodles-dashboard',
  templateUrl: './noodles-dashboard.component.html',
  styleUrls: ['./noodles-dashboard.component.scss'],
})
export class NoodlesDashboardComponent implements OnInit {
  filterText = '';

  constructor() {}

  ngOnInit(): void {}

  updateFilter(value: string): void {
    this.filterText = value?.toLowerCase();
  }
}

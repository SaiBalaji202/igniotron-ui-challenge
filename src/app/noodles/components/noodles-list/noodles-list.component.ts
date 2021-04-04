import { Component, Input, OnInit } from '@angular/core';
import { NoodlesStore } from './../../store/noodles.store';

@Component({
  selector: 'igniotron-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.scss'],
})
export class NoodlesListComponent implements OnInit {
  @Input() filterText = '';
  constructor(public noodlesStore: NoodlesStore) {}

  ngOnInit(): void {}
}

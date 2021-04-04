import { Component, OnInit } from '@angular/core';
import { NoodlesStore } from './../../store/noodles.store';

@Component({
  selector: 'igniotron-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.scss'],
})
export class NoodlesComponent implements OnInit {
  constructor(public noodlesStore: NoodlesStore) {}

  ngOnInit(): void {}
}

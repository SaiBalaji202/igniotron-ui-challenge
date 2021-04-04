import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoodlesStore } from './../../store/noodles.store';

@Component({
  selector: 'igniotron-noodles-info',
  templateUrl: './noodles-info.component.html',
  styleUrls: ['./noodles-info.component.scss'],
})
export class NoodlesInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private noodlesStore: NoodlesStore
  ) {}

  ngOnInit(): void {}
}

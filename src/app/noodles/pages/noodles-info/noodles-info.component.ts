import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noodle } from '@app/noodles/models/noodles.model';
import { NoodlesStore } from './../../store/noodles.store';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'igniotron-noodles-info',
  templateUrl: './noodles-info.component.html',
  styleUrls: ['./noodles-info.component.scss'],
})
export class NoodlesInfoComponent implements OnInit {
  noodle: Noodle;
  faHome = faHome;

  constructor(
    private route: ActivatedRoute,
    private noodlesStore: NoodlesStore
  ) {}

  ngOnInit(): void {
    this.noodle = this.noodlesStore.getNoodle(this.route.snapshot.params.id);
  }
}

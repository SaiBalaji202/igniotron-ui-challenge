import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private noodlesStore: NoodlesStore
  ) {}

  ngOnInit(): void {
    this.noodle = this.noodlesStore.getNoodle(this.route.snapshot.params.id);
    console.log(this.noodle);

    if (!this.noodle) {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Noodle } from '@app/noodles/models/noodles.model';

@Component({
  selector: 'igniotron-noodles-card',
  templateUrl: './noodles-card.component.html',
  styleUrls: ['./noodles-card.component.scss'],
})
export class NoodlesCardComponent implements OnInit {
  @Input() noodle: Noodle;
  @Input() noodleId: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onView(): void {
    this.router.navigate(['noodles', this.noodleId + '']);
  }
}

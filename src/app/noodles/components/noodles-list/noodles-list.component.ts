import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NoodlesStore } from './../../store/noodles.store';
import { SortOption } from '@app/noodles/models/sort.model';
import { Observable } from 'rxjs';
import { Noodle } from '@app/noodles/models/noodles.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'igniotron-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.scss'],
})
export class NoodlesListComponent implements OnInit, OnChanges {
  @Input() filterText = '';
  @Input() sortOrder: SortOption;

  noodles$: Observable<Noodle[]>;

  constructor(public noodlesStore: NoodlesStore) {}

  ngOnInit(): void {
    this.sortByStars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.sortOrder) {
      this.sortByStars();
    }
  }

  sortByStars(): void {
    this.noodles$ = this.noodlesStore.noodles$.pipe(
      map((noodles) => {
        if (this.sortOrder === SortOption.ASCENDING) {
          noodles = noodles.sort(
            (noodle1, noodle2) => noodle1.Stars - noodle2.Stars
          );
        } else if (this.sortOrder === SortOption.DESCENDING) {
          noodles = noodles.sort(
            (noodle1, noodle2) => noodle2.Stars - noodle1.Stars
          );
        }
        return [...noodles];
      })
    );
  }
}

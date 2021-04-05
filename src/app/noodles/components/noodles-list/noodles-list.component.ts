import { Component, OnInit } from '@angular/core';
import { NoodlesStore } from './../../store/noodles.store';
import { SortOption } from '@app/noodles/models/sort.model';
import { Observable, combineLatest } from 'rxjs';
import { Noodle } from '@app/noodles/models/noodles.model';
import { map, startWith } from 'rxjs/operators';
import { NoodlesFilterService } from '@app/noodles/services/noodles-filter.service';

@Component({
  selector: 'igniotron-noodles-list',
  templateUrl: './noodles-list.component.html',
  styleUrls: ['./noodles-list.component.scss'],
})
export class NoodlesListComponent implements OnInit {
  noodles$: Observable<Noodle[]>;

  private defaultFilterData = {
    filterText: '',
    sortOrder: SortOption.DESCENDING,
  };

  constructor(
    public noodlesStore: NoodlesStore,
    private filterService: NoodlesFilterService
  ) {}

  ngOnInit(): void {
    this.watchDataChange();
  }

  private watchDataChange(): void {
    const filters$ = this.filterService.filters$.pipe(
      startWith(this.defaultFilterData)
    );
    this.noodles$ = combineLatest([this.noodlesStore.noodles$, filters$]).pipe(
      map(([noodles, filterData]) => {
        noodles = this.filterData(noodles, filterData.filterText);
        noodles = this.sortByStars(noodles, filterData.sortOrder);
        return noodles;
      })
    );
  }

  private sortByStars(noodles: Noodle[], sortOrder: SortOption): Noodle[] {
    if (sortOrder === SortOption.ASCENDING) {
      noodles = noodles.sort(
        (noodle1, noodle2) => noodle1.Stars - noodle2.Stars
      );
    } else if (sortOrder === SortOption.DESCENDING) {
      noodles = noodles.sort(
        (noodle1, noodle2) => noodle2.Stars - noodle1.Stars
      );
    }
    return [...noodles];
  }

  private filterData(noodles: Noodle[], filterText: string): Noodle[] {
    if (!filterText) {
      return [...noodles];
    }
    return noodles.filter((noodle) =>
      noodle.Brand.trim().toLowerCase().startsWith(filterText)
    );
  }
}

import { BehaviorSubject } from 'rxjs';
import { SortOption } from '../models/sort.model';
import { FilterData } from './../models/filter.model';

export class NoodlesFilterService {
  private filterDataSubj = new BehaviorSubject<FilterData>({
    filterText: '',
    sortOrder: SortOption.DESCENDING,
  });
  filters$ = this.filterDataSubj.asObservable();

  setFilter(filterKey: keyof FilterData, value: any): void {
    let filterData = this.filterDataSubj.getValue();
    filterData = { ...filterData, [filterKey]: value };
    this.filterDataSubj.next(filterData);
  }
}

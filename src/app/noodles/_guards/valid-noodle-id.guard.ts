import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';
import { NoodlesStore } from './../store/noodles.store';

@Injectable({
  providedIn: 'root',
})
export class ValidNoodleIdGuard implements CanActivate {
  constructor(private router: Router, public noodlesStore: NoodlesStore) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.noodlesStore.nonEmptyNoodles$.pipe(
      take(1),
      map((noodles) => {
        const { id } = route.params;
        const isValidId = id >= 0 && id < noodles?.length;
        return isValidId ? true : this.router.createUrlTree(['']);
      })
    );
  }
}

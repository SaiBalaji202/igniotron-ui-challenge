import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, zip } from 'rxjs';
import { Noodle, NoodleResp, NoodleImgResp } from '../models/noodles.model';
import { environment } from './../../../environments/environment';
import { map, shareReplay, tap } from 'rxjs/operators';
import { SpinnerService } from '@shared/UIElements/spinner/spinner.service';

@Injectable({ providedIn: 'root' })
export class NoodlesStore {
  private noodlesSubject = new BehaviorSubject<Noodle[]>(null);
  noodles$ = this.noodlesSubject.asObservable();

  constructor(private http: HttpClient, private loading: SpinnerService) {
    this.fetchNoodles()?.subscribe();
  }

  // //////////////////
  // Fetch Logic
  // //////////////////
  private fetchNoodles(): Observable<Noodle[]> {
    const noodle$ = zip(this.fetchNoodlesData(), this.fetchNoodlesImg()).pipe(
      map(([noodles, noodleImgs]) =>
        noodles.map((noodle) => {
          const imgIdx = Math.floor(Math.random() * noodleImgs.length);
          return { ...noodle, Image: noodleImgs[imgIdx].Image };
        })
      ),
      tap((noodles) => this.noodlesSubject.next(noodles))
    );
    return this.loading.spinUntilComplete(noodle$);
  }

  private fetchNoodlesData(): Observable<NoodleResp[]> {
    return this.http.get<NoodleResp[]>(environment.api.url).pipe(shareReplay());
  }

  private fetchNoodlesImg(): Observable<NoodleImgResp[]> {
    return this.http
      .get<NoodleImgResp[]>(environment.api.imageUrl)
      .pipe(shareReplay());
  }
}

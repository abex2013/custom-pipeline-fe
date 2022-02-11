import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeStepsIndexService {
  index: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  changeIndex(payload: any): Observable<number> {
        if (payload) {

          localStorage.setItem('current_index', payload);

          this.index.next(payload);
        }
        return payload;
      }
}

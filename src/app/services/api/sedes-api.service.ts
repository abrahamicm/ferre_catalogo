import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IsedesAdapterService } from '../isedes-adapter.service';
import { Observable } from 'rxjs';
import { ISedes } from '../../interfaces/i-sedes';
import { APISedes } from '../../interfaces/APISedes';
import { environment } from '../../../environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SedesApiService {
  constructor(private h: HttpClient, private s: IsedesAdapterService) { }

  getAll(): Observable<ISedes[]> {
    return this.h.get<APISedes[]>(environment.API_URL + 'ferre_sedes').pipe(
      map(x => this.s.adaptarTodos(x))
    )
  }

}

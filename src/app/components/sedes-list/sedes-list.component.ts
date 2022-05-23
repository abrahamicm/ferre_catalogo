import { Component, OnInit } from '@angular/core';
import { ISedes } from '../../interfaces/i-sedes';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { APISedes } from '../../interfaces/APISedes';
import { map } from 'rxjs/operators';
import { IsedesAdapterService } from 'src/app/services/isedes-adapter.service';
import { Observable } from 'rxjs';
import { selectFeatureSedesLoading } from 'src/app/store/selectors/sedes.selectors';
import { Store } from '@ngrx/store';

import { SedesApiService } from '../../services/api/sedes-api.service';
import { sedesLoadAction, sedesLoadedAction } from '../../store/actions/sedes.actions';
import { selectFeatureSedesItems } from '../../store/selectors/sedes.selectors';

@Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.scss'],
})
export class SedesListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  sedes$: Observable<any> = new Observable()

  sedes: ISedes[] = []
  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.loading$ = this.store.select(selectFeatureSedesLoading)
    this.sedes$ = this.store.select(selectFeatureSedesItems)
    this.store.dispatch(sedesLoadAction())
  }

}

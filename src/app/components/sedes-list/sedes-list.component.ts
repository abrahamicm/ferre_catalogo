import { Component, OnInit } from '@angular/core';
import { ISedes } from '../../interfaces/i-sedes';
import { Observable } from 'rxjs';
import { selectFeatureSedesLoading } from 'src/app/store/selectors/sedes.selectors';
import { Store } from '@ngrx/store';
import { sedesLoadAction, sedesLoadedAction, sedeSelectedAction } from '../../store/actions/sedes.actions';
import { selectFeatureSedesItems, selectFeatureSedeId } from '../../store/selectors/sedes.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sedes-list',
  templateUrl: './sedes-list.component.html',
  styleUrls: ['./sedes-list.component.scss'],
})
export class SedesListComponent implements OnInit {
  loading$: Observable<boolean> = new Observable()
  sedes$: Observable<any> = new Observable()
  sedeId$: Observable<number> = new Observable()


  sedes: ISedes[] = []
  constructor(private store: Store<any>, private router: Router) {

  }

  ngOnInit() {
    this.loading$ = this.store.select(selectFeatureSedesLoading)
    this.sedes$ = this.store.select(selectFeatureSedesItems)
    this.sedeId$ = this.store.select(selectFeatureSedeId)
    this.store.dispatch(sedesLoadAction())
  }
  seleccionaSedeId(sedeId: number) {
    this.store.dispatch(sedeSelectedAction({ sedeId }))
    this.sedeId$.subscribe(
      () => { this.router.navigate(['/home']) }
    )

  }

}

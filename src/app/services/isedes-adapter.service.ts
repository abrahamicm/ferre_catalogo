import { Injectable } from '@angular/core';
import { IAdapterBase } from '../interfaces/i-adapter-base';
import { APISedes } from '../interfaces/APISedes';
import { ISedes } from '../interfaces/i-sedes';

@Injectable({
  providedIn: 'root'
})
export class IsedesAdapterService implements IAdapterBase {

  constructor() { }
  adaptarUno(x: APISedes): ISedes {
    return {
      id: x.id.toString(),
      nombre: x.name,
      slug: x.slug

    }
  }
  adaptarTodos(x: APISedes[]): ISedes[] {
    return x.map(_x => this.adaptarUno(_x))
  }
}

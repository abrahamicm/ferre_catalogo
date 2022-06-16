import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatingService {

  constructor() { }

  reamplazar(texto: string): string {
    let t;
    t = texto;
    t = t.replace("&#8242;", "\"");
    t = t.replace("&#8216;", "‘");
    t = t.replace("&#8211;", "–");
    return t;
  }
}

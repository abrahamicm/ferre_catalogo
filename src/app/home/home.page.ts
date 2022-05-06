import { Component } from '@angular/core';
import { ApiCatalogoService } from '../services/api-catalogo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiCatalogoService:ApiCatalogoService) {
    apiCatalogoService.getProductos();
    apiCatalogoService.getCategorias();
  }

}

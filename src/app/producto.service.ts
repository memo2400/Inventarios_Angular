import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

// injhectable necvesaria para usar el servicio desde comonete producto lista
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = "http://localhost:8080/inventario-app/productos";
  constructor(private clienteHttp: HttpClient) { }

    // : esto es lo que regresa, observable se importa desde rxjs
    // producto se importo desde ./produto con ayuda rapida
    obtenerProductosLista(): Observable<Producto []> {
      // (esto es un parametro)
      return this.clienteHttp.get<Producto[]>(this.urlBase);

    }
}

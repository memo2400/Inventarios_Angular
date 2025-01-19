import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
@Component({
  selector: 'app-producto-lista',
  // aqui se asocia la pagnia html
  templateUrl: './producto-lista.component.html',
})
export class ProductoListaComponent {

  productos: Producto[];
  ProdutcoService: any;
  
  // productoServicio nos conectaremos al servicio
  constructor (private productoServicio: ProductoService){}

  // iniciar cosas aqui
  ngOnInit(){

    this.obtenerProductos();
  }

  private obtenerProductos(){

    // consumimos de observale
    this.productoServicio.obtenerProductosLista().subscribe(
      // recibimos el listado de tipo observable<producto>.
      (datos => {
        this.productos = datos;
      }
      )
    )
  }


}

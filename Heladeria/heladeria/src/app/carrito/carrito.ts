import { Component, EventEmitter, Output } from '@angular/core';
import { CarritoHelado } from '../carrito-helado';
import { Helado } from '../lista-helados/Helado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss'
})
export class Carrito {
  carritoLista$: Observable<Helado[]>;
  carrito: Helado[] = [];

 constructor(private carritoService: CarritoHelado) {
    this.carritoLista$ = this.carritoService.carritoLista$;

    this.carritoLista$.subscribe(lista => {
      this.carrito = lista});

  }
  get total(): number {
    return this.carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  }
  @Output() reponerStock = new EventEmitter<Helado[]>();

  vaciar() {
    const productos = this.carritoService.vaciarCarrito();
    this.reponerStock.emit(productos); // Avisamos a lista-helados
  }
compraRealizada = false;

finalizarCompra() {
  if (this.total > 0) {
    this.compraRealizada = true;

    setTimeout(() => {
      this.compraRealizada = false;
      this.vaciar(); // Vacía el carrito después de la animación
    }, 4500);
  } else {
    alert('No hay productos en el carrito.');
  }
}

}
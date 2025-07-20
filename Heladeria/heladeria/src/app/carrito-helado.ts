import { Injectable } from '@angular/core';
import { Helado } from './lista-helados/Helado';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoHelado {
private carrito: Helado[] = [];
  private carritoLista = new BehaviorSubject<Helado[]>([]);
  carritoLista$ = this.carritoLista.asObservable();

  agregarAlCarrito(helado: Helado) {
    const itemExistente = this.carrito.find(h => h.nombre === helado.nombre);

    if (itemExistente) {
      itemExistente.cantidad += helado.cantidad;
    } else {
      // hacemos una copia para no afectar la lista original
      this.carrito.push({ ...helado });
    }

    // notifica a todos los suscriptores
    this.carritoLista.next(this.carrito);
  }

  vaciarCarrito() {
     const productos = [...this.carrito]; // hacemos una copia antes de vaciar
  this.carrito = [];
  this.carritoLista.next(this.carrito);
  return productos;
  }
}

  


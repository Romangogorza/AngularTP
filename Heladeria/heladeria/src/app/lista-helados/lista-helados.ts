import { Component } from '@angular/core';
import { Helado } from './Helado';
import { CarritoHelado } from '../carrito-helado';

@Component({
  selector: 'app-lista-helados',
  standalone: false,
  templateUrl: './lista-helados.html',
  styleUrl: './lista-helados.scss'
})
export class ListaHelados{
 helados: Helado[] = [
  { nombre: 'Chocolate Dubai', precio: 1700, tipo: 'Chocolate', cantidad: 0, stock: 5 },
  { nombre: 'Frambuesa', precio: 1500, tipo: 'Fruta', cantidad: 0, stock: 3 },
  { nombre: 'Cheesecake Frutos Rojos', precio: 1900, tipo: 'Especial', cantidad: 1, stock: 2 },
  { nombre: 'Frutilla', precio: 1000, tipo: 'Fruta', cantidad: 0, stock: 3 },
  { nombre: 'Menta Granizada', precio: 1600, tipo: 'Especial', cantidad: 0, stock: 10 },
  { nombre: 'Dulce de Leche', precio: 1200, tipo: 'Especial', cantidad: 0, stock: 15},
  { nombre: 'Chocolate', precio: 1500, tipo: 'Chocolate', cantidad: 0, stock: 12 },
  { nombre: 'Vainilla', precio: 1500, tipo: 'Especial', cantidad: 0, stock: 6 },
  { nombre: 'Manzana', precio: 1500, tipo: 'Fruta', cantidad: 0, stock: 4},
  { nombre: 'Flan', precio: 1500, tipo: 'Fruta', cantidad: 0, stock: 31 },
  { nombre: 'Crema Oreo', precio: 1500, tipo: 'Especial', cantidad: 0, stock: 11 },
  { nombre: 'Fruta Tropical', precio: 1500, tipo: 'Frutal', cantidad: 0, stock: 23 },
  { nombre: 'Chocolate Blanco', precio: 1500, tipo: 'Chocolate', cantidad: 0, stock: 10 },
  { nombre: 'Brownie con Dulce de Leche', precio: 1500, tipo: 'Especial', cantidad: 0, stock: 22 },
  { nombre: 'Banana Split', precio: 1500, tipo: 'Especial', cantidad: 0, stock: 13 },

];







  constructor(private carro :CarritoHelado){
  }
 

  agregarAlCarrito(helado: Helado) {
    if (helado.cantidad > 0) {
     if (helado.cantidad <= helado.stock) {
      // Descontamos del stock
      helado.stock -= helado.cantidad;

      // Lo agregamos al carrito
      this.carro.agregarAlCarrito(helado);

      // Reiniciamos la cantidad seleccionada
      helado.cantidad = 0;
    } 
    
    else {
      alert('Seleccioná al menos 1 helado antes de comprar.');
    }
  }
}
reponerStock(productos: Helado[]) {
  productos.forEach(prodCarrito => {
    const heladoOriginal = this.helados.find(h => h.nombre === prodCarrito.nombre);
    if (heladoOriginal) {
      heladoOriginal.stock += prodCarrito.cantidad;
    }
  });
}
}









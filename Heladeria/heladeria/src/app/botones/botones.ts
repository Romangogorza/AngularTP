import { Component, Input} from '@angular/core';
import { Helado } from '../lista-helados/Helado';

@Component({
  selector: 'app-botones',
  standalone: false,
  templateUrl: './botones.html',
  styleUrl: './botones.scss'
})
export class Botones {
  @Input()helado! : Helado;
  


  restarHelado(): void {
  if (this.helado.cantidad >0) {
    this.helado.cantidad--;
  }
}

sumarHelado(): void {
  if (this.helado.cantidad < this.helado.stock) {
    this.helado.cantidad++;
  }
}


}

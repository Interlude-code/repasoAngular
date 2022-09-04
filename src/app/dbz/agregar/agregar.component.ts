import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Personaje} from "../interfaces/dbz.interfaces";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input()
  nuevoLuchador: Personaje ={
    nombre: '',
    poder: 0,
  }

  @Output()
  onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter

  agregar(): void {
    if(this.nuevoLuchador.nombre.trim().length ===0){
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevoLuchador)
    this.nuevoLuchador={
      nombre: '',
      poder: 0,
    }
  }
}

import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevoLuchador: Personaje = {
    nombre: '',
    poder: 0,
  };

  luchadores: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegetta',
      poder: 8000,
    },
  ];

  agregarPersonaje(event: Personaje) {
    this.luchadores.push(event);
  }

  constructor(private dbzSerivce: DbzService){

  }

}

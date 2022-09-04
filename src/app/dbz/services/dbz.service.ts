import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService{

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

    constructor(){
        console.log("oe")
    }

}
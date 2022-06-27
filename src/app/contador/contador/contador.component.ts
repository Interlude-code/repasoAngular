import { Component } from '@angular/core';


@Component({
  selector: 'contador-app',
  templateUrl: './contador.component.html',
})
export class ContadorComponent{
  title : string = 'Contador app';
  numero: number = 0;
  base  : number = 5;

  operacion(operacion: string){
    if(operacion == 'sumar'){
      this.numero++;
    }else{
      this.numero--;
    }
  }

  acumulador(numero: number){
    this.numero += numero;
  }
}

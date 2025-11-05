import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'hooks-angular',
  standalone: false,
  templateUrl: './hooksangular-component.html',
})
export class HooksAngular {
  public mensaje: string;
  constructor() {
    console.log('Constructor: Primer método de inicio de Component');
    this.mensaje = 'Hoy es miércoles';
  }

  cambiarMensaje(): void {
    this.mensaje = 'y mañana juernes!!!';
  }

  ngOnInit(): void {
    console.log('Soy On Init, después de constructor!!!!');
  }

  ngDoCheck(): void {
    console.log('NgCheck cambiando algo en render');
  }
}

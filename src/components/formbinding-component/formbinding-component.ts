import { Component } from '@angular/core';

@Component({
  selector: 'form-binding',
  standalone: false,
  templateUrl: './formbinding-component.html',
})
export default class FormBinding {
  public user: any;
  public mensaje: string;

  constructor() {
    this.user = {
      nombre: '',
      apellidos: '',
      edad: 0,
    };
    this.mensaje = '';
  }

  recibirDatos(): void {
    this.mensaje = 'Datos recibidos';
  }
}

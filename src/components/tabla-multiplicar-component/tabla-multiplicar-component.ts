import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tabla-multiplicar',
  standalone: false,
  templateUrl: './tabla-multiplicar-component.html',
})
export default class TablaMultiplicar {
  public resultados: Array<number>;
  @ViewChild('cajaNumero') cajaNumeroRef: ElementRef;
  constructor() {
    this.cajaNumeroRef = new ElementRef(0);
    this.resultados = [];
  }

  tablaMultiplicar() {
    this.resultados.length != 0 && (this.resultados = []);
    let num = parseInt(this.cajaNumeroRef.nativeElement.value);
    for (let i = 1; i <= 10; i++) {
      this.resultados.push(num * i);
    }
  }
}

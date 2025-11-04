import { Component } from '@angular/core';

@Component({
  selector: 'primer-component',
  standalone: false,
  templateUrl: './primer-component.html',
  styleUrl: './primer-component.css',
})
export class PrimerComponent {
  public titulo: string;
  public descripcion: string;
  public year: number;

  constructor() {
    this.titulo = 'Hoy es martes';
    this.descripcion = 'Hoy gana el Madrid!!!!';
    this.year = 2025;
  }
}

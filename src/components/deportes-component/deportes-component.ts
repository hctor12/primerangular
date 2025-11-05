import { Component } from '@angular/core';

@Component({
  selector: 'deportes-component',
  templateUrl: './deportes-component.html',
  standalone: false,
})
export default class DeportesComponent {
  public sports: Array<string>;
  public numbers: Array<number>;

  constructor() {
    this.sports = ['Canicas', 'Curling', 'Dardos', 'Petanca'];
    this.numbers = [4, 5, 6, 7, 78, 99, 2];
  }
}

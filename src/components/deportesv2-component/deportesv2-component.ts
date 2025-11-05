import { Component } from '@angular/core';

@Component({
  selector: 'deportesv2-component',
  standalone: false,
  template: `
    <div>
      <h1>@Directivas 2025</h1>
    </div>
  `,
})
export default class DeportesV2Component {
  public sports: Array<string>;
  public numbers: Array<number>;

  constructor() {
    this.sports = ['Canicas', 'Curling', 'Dardos', 'Petanca'];
    this.numbers = [4, 5, 6, 7, 78, 99, 2];
  }
}

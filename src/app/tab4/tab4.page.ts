import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  resultado: string = '';

  constructor() {}

  append(symbol: string) {
    this.resultado += symbol;
  }

  clear() {
    this.resultado = '';
  }

  calculate() {
    try {
      this.resultado = eval(this.resultado);
    } catch (e) {
      this.resultado = 'Error';
    }
  }

}
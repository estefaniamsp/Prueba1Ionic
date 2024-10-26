import { Component } from '@angular/core';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  a: number = 0;
  b: number = 0;
  c: number = 0;
  raiz1: number | null = null;
  raiz2: number | null = null;

  calcularRaices() {
    const discriminante = this.b ** 2 - 4 * this.a * this.c;
    
    if (discriminante >= 0) {
      this.raiz1 = (-this.b + Math.sqrt(discriminante)) / (2 * this.a);
      this.raiz2 = (-this.b - Math.sqrt(discriminante)) / (2 * this.a);
    } else {
      this.raiz1 = null;
      this.raiz2 = null; 
    }
  }
}

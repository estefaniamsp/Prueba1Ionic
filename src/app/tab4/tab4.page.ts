import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  fechaInicio: string = '';  
  fechaFin: string = '';     
  dias: number | null = null;

  calcularDias() {
    if (this.fechaInicio && this.fechaFin) {
      const inicio = new Date(this.fechaInicio);
      const fin = new Date(this.fechaFin);
      this.dias = Math.floor((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      this.dias = null; 
    }
  }
}

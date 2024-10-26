import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  texto: string = '';

  constructor(private storage: Storage) {
    this.storage.create();
  }
  
  async guardarTexto() {
    await this.storage.set('textoGuardado', this.texto);
  }
  
  async cargarTexto() {
    this.texto = await this.storage.get('textoGuardado');
  }

}

import { FrasiService } from '../../frasi.service';
import { Frasi } from './../../Models/frasi';
import { Component } from '@angular/core';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss',
})
export class CompletatiComponent {
  frasi: Frasi[] = [];
  constructor(private frasiSvc: FrasiService) {}
  ngOnInit() {
    this.frasiSvc.getAll().then((frasi) => (this.frasi = frasi));
  }

  delete(id: number) {
    if (!id) return;

    this.frasiSvc.Delete(id).then((res) => {
      this.frasi = this.frasi.filter((frasi) => frasi.id != id);
      alert(`frase ${this.frasi} eliminata`);
    });
  }
}

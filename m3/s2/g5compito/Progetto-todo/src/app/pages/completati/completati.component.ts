import { TodosComponent } from './../todos/todos.component';
import { FrasiService } from '../../frasi.service';
import { Frasi } from './../../Models/frasi';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrl: './completati.component.scss',
})
export class CompletatiComponent {
  frasi: Frasi[] = [];
  loading2: boolean = false;
  constructor(private frasiSvc: FrasiService, private router: Router) {}
  ngOnInit() {
    this.loading2 = true;
    this.frasiSvc.getActive().then((frasi) => (this.frasi = frasi));
    this.loading2 = false;
  }

  delete(id: number) {
    if (!id) return;

    this.frasiSvc.Delete(id).then((res) => {
      this.frasi = this.frasi.filter((frasi) => frasi.id != id);
      alert(`frase ${this.frasi} eliminata`);
    });
  }
  ChangeStato(id: number) {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
    return this.frasiSvc.Change(id);
  }
}

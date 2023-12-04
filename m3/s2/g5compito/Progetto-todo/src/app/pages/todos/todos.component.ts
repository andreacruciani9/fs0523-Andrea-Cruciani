import { Frasi } from './../../Models/frasi';
import { Component } from '@angular/core';
import { ITodo } from '../../Modules/itodo';
import { Title } from '@angular/platform-browser';

import { FrasiService } from '../../frasi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  constructor(private frasiSVC: FrasiService, private router: Router) {}
  frasi: Frasi[] = [];
  newfrase: Partial<Frasi> = {};
  oldFrase: Frasi | null = null;

  loading: boolean = false;
  ngOnInit() {
    this.frasiSVC.getAll().then((frasi) => (this.frasi = frasi));
  }

  save() {
    this.loading = true;
    this.newfrase.completed = Boolean(Number(this.newfrase.completed));
    this.frasiSVC.Create(this.newfrase).then((res) => {
      this.loading = false;
      this.oldFrase = res;
      setTimeout(() => {
        this.router.navigate(['/frasi-completate']);
      }, 3000);
    });
  }
  delete(id: number) {
    if (!id) return;

    this.frasiSVC.Delete(id).then((res) => {
      this.frasi = this.frasi.filter((frasi) => frasi.id != id);
      alert(`frase ${this.frasi} eliminata`);
    });
  }
  ngOninit() {
    this.Update();
  }
  Update() {
    this.frasiSVC.getActive().then((frasi: Frasi[]) => {
      this.frasi = frasi;
    });
  }
  changeActive(frasi: ITodo) {
    this.frasiSVC.getAll().then(() => {
      let index = this.frasi.findIndex((f) => f.id == frasi.id);
      frasi.completed = !frasi.completed;
      this.frasi.splice(index, 1, frasi);

      return frasi.completed;
    });
  }
}

//aggiustare la visualizzazione nel falso

/*function getActive() {
  return fetch('http://localhost:3000/frasi')
    .then((res) => res.json())
.     .then((res) => {
      return res.filter(
        (res: { completed: boolean }) => res.completed === true
      );
    });
}*/

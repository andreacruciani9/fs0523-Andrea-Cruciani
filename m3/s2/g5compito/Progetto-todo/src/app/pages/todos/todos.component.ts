import { Frasi } from './../../Models/frasi';
import { Component, Injectable, NgModule } from '@angular/core';
import { ITodo } from '../../Modules/itodo';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FrasiService } from '../../frasi.service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
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
  loading2: boolean = false;
  loading: boolean = false;
  ngOnInit() {
    this.frasiSVC.getInactive().then((frasi) => {
      (this.frasi = frasi), (this.loading2 = false);
    });
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
    this.frasiSVC.getActive().then((frasi: Frasi[]) => {
      this.frasi = frasi;
    });
  }

  changeStato(id: number) {
    return this.frasiSVC.Change(id);
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

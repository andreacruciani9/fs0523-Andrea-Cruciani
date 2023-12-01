import { Component } from '@angular/core';
import { ITodo } from '../../Modules/itodo';
import { Title } from '@angular/platform-browser';
import { Frasi } from '../../Models/frasi';
import { FrasiService } from '../../frasi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
  constructor(private frasiSVC: FrasiService, private router: Router) {}

  newfrase: Partial<Frasi> = {
    completed: true,
  };
  oldFrase: Frasi | null = null;

  loading: boolean = false;

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
}

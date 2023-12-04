import { Frasi } from './Models/frasi';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  { path: '', component: TodosComponent },

  {
    path: 'frasi-completate',
    component: CompletatiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

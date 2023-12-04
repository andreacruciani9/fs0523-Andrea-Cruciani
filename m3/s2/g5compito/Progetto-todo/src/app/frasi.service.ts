import { Injectable } from '@angular/core';
import { ITodo } from './Modules/itodo';
import { Frasi } from './Models/frasi';

@Injectable({
  providedIn: 'root',
})
export class FrasiService {
  constructor() {}
  apiUrl: string = ' http://localhost:3000/frasi';

  getAll(): Promise<Frasi[]> {
    return fetch(this.apiUrl).then((res) => res.json());
  }
  getById(id: number): Promise<Frasi> {
    return fetch(this.apiUrl + `/${id}`).then((res) => res.json());
  }
  getActive() {
    return fetch(this.apiUrl)
      .then((res) => res.json())
      .then((res) => {
        return res.filter(
          (res: { completed: boolean }) => res.completed === true
        );
      });
  }

  Create(frasi: Partial<Frasi>): Promise<Frasi> {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(frasi),
    }).then((res) => res.json());
  }

  Update(frasi: Frasi): Promise<Frasi> {
    return fetch(this.apiUrl + `/${frasi.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(frasi),
    }).then((res) => res.json());
  }

  Delete(id: number): Promise<Frasi> {
    return fetch(this.apiUrl + `/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.json());
  }
  Change() {
    return fetch(this.apiUrl)
      .then((res) => res.json())
      .then((res) => {
        let index = res.findIndex((resarr: []) => res.id == res.id);
        res.completed = !res.completed;
        [].splice(index);
      });
  }
}

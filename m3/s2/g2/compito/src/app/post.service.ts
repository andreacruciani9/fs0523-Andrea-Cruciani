import { Injectable } from '@angular/core';
import { IPost } from './Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  post: IPost[] = [
    {
      id: 0,
      title: 'la bella vita di fabio',
      text: "fabio beve usualmente spremute d'arancio",
      valore: false,
    },
    {
      id: 1,
      title: 'the devil in the Softwerhouse',
      text: 'Un ragazzo che entra a far parte del mondo tech prevalentemente dominato da demoni',
      valore: false,
    },
    {
      id: 2,
      title: 'la saggezze di Dave',
      text: 'leader ci si nasce',
      valore: false,
    },
    {
      id: 3,
      title: 'la simpatia di B',
      text: ' simpatici ci si nascie',
      valore: true,
    },
    {
      id: 4,
      title: 'ligure in tech',
      text: "la liguria in tecnologia e l'indignazione verso l'ignoto in versione saracstica",
      valore: true,
    },
  ];
  getactivepost() {
    return this.post.filter((post) => post.valore);
  }
  getINactivepost() {
    return this.post.filter((post) => !post.valore);
  }
}

import { IPost } from './Modules/ipost';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postArr: IPost[] = [
    {
      id: 0,
      title: 'graziani Ciccio',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      valore: true,
      type: 'news',
    },
    {
      id: 1,
      title: 'graziani Ciccio',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      valore: true,
      type: 'news',
    },
    {
      id: 2,
      title: 'graziani Ciccio',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      valore: false,
      type: 'news',
    },
    {
      id: 3,
      title: 'graziani Ciccio',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      valore: false,
      type: 'education',
    },
    {
      id: 4,
      title: 'graziani Ciccio',
      text: 'lorem ipsum dolor sit amet, consectetur adipiscing',
      valore: true,
      type: 'politic',
    },
  ];
  getAll() {
    return this.postArr;
  }
  getActivePost() {
    return this.postArr.filter((p) => p.valore);
  }
  getInactivePost() {
    return this.postArr.filter((p) => !p.valore);
  }
  //per passare a disponibile a non disponibile
  toggleActive(post: IPost) {
    let index = this.postArr.findIndex((p) => p.id == post.id);
    post.valore = !post.valore;
    this.postArr.splice(index, 1, post);
  }
}

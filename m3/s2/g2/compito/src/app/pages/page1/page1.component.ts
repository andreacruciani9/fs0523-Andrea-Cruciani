import { Component, NgModule } from '@angular/core';
import { IPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
})
export class Page1Component {
  post: IPost[] = [];
  constructor(private postSVC: PostService) {}
  ngOnInit() {
    this.post = this.postSVC.getactivepost();
  }
}

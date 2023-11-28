import { Component } from '@angular/core';
import { IPost } from '../../Models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
})
export class Page2Component {
  post: IPost[] = [];
  constructor(private postSVC: PostService) {}
  ngOnInit() {
    this.post = this.postSVC.getINactivepost();
  }
}

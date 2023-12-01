import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { IPost } from '../../Modules/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-page1',
  standalone: true,
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss',
  imports: [CommonModule, PostComponent],
})
export class Page1Component {
  postArr: IPost[] = [];
  constructor(private postSVC: PostService) {}
  ngOnInit() {
    this.postArr = this.postSVC.getActivePost();
  }
}

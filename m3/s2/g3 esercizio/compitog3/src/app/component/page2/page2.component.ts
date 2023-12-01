import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../post.service';
import { IPost } from '../../Modules/ipost';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.scss',
})
export class Page2Component {
  postArr: IPost[] = [];
  constructor(private postSVC: PostService) {}
  ngOnInit() {
    this.postArr = this.postSVC.getInactivePost();
  }
}

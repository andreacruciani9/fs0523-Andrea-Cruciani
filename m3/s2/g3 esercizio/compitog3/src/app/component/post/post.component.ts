import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPost } from '../../Modules/ipost';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  postArr: IPost[] = [];
  constructor(private postSvc: PostService) {}
  ngOnInit() {
    this.postArr = this.postSvc.getActivePost();
  }
  show: boolean = true;
}

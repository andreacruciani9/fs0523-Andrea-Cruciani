import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { Page1Component } from './component/page1/page1.component';
import { Page2Component } from './component/page2/page2.component';
import { PostComponent } from './component/post/post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'post', component: PostComponent },
];

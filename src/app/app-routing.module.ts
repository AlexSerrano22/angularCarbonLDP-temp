import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {PostComponent} from './posts/post/post.component';
import {CreatePostComponent} from './posts/create-post/create-post.component';
import {CreateAuthorComponent} from './author/create-author/create-author.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
  {
    path: 'create/post',
    component: CreatePostComponent
  },
  {
    path: 'create/author',
    component: CreateAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

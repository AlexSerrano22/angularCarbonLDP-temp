import {Component} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  hasClass = true;
  posts: Array<Post> = [];

  comment = '';

  constructor(private _postService: PostService) {
    this._postService.getPosts().subscribe(
      (data: Array<Post>) => {
        this.posts = data;
      },
      () => {
      });
  }

  handleClick(e) {
    console.log(e);
  }

}

export interface Post {
  id?: number;
  title: string;
  body: string;
  author: string;
}

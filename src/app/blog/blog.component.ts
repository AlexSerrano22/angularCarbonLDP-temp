import {Component} from '@angular/core';
import {Post, PostService} from '../services/post.service';
import {CarbonLDP} from 'carbonldp';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  hasClass = true;
  posts: Array<Post> = [];

  comment = '';

  constructor(private _postService: PostService, private _carbon: CarbonLDP) {
    console.log(this._carbon);
    /*this._postService.getPosts().subscribe(
      (data: Array<Post>) => {
        this.posts = data;
      },
      () => {
      });*/
  }

  handleClick(e) {
    console.log(e);
  }

}

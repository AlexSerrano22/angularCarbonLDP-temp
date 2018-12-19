import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Post} from '../../services/post.service';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Post;

  constructor(private _route: ActivatedRoute,
              private _postService: PostService) {
    this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._postService.getPost(params.get('id'))
      )
    ).subscribe((post: Post) => {
      this.post = post;
    });
  }


  ngOnInit() {
  }

}

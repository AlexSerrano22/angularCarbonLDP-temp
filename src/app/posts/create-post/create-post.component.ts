import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../../services/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = {
    title: '',
    body: '',
  };

  newPostForm = new FormGroup({
    title: new FormControl(this.post.title, [Validators.required, Validators.minLength(4)]),
    body: new FormControl(this.post.body, [Validators.required, Validators.minLength(4)])
  });

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
  }


  createPost() {
    const post = {
      title: this.newPostForm.value.title,
      body: this.newPostForm.value.body,
    };
    this._postService.createPost(post).then((document) => {
      console.log(document);
    });
  }
}

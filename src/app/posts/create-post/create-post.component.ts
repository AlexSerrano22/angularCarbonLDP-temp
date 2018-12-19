import {Component, OnInit} from '@angular/core';
import {Post, PostService} from '../../services/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../../services/author.service';
import {AccessPoint} from 'carbonldp/AccessPoint';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  post: Post = {
    title: '',
    body: '',
    author: ''
  };

  newPostForm = new FormGroup({
    title: new FormControl(this.post.title, [Validators.required, Validators.minLength(4)]),
    body: new FormControl(this.post.body, [Validators.required, Validators.minLength(4)]),
    author: new FormControl(this.post.author, [Validators.required, Validators.minLength(3)])
  });

  constructor(private _postService: PostService, private _authorService: AuthorService) {
  }

  ngOnInit() {
  }


  createPost() {
    const post = {
      title: this.newPostForm.value.title,
      body: this.newPostForm.value.body,
    };
    this._postService.createPost(post).then((document) => {

      const commentAccessPoint = AccessPoint.create({
        hasMemberRelation: 'comments',
        isMemberOfRelation: 'post'
      });

      document.$create(commentAccessPoint, 'comments');

      return document.$refresh();

    }).then((document) => {
      return this._authorService.linkPost(document.$id, this.newPostForm.value.author);
    }).then(() => {
      this.newPostForm.reset();
    });
  }
}

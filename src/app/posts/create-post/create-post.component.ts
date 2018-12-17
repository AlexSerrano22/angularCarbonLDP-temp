import {Component, OnInit} from '@angular/core';
import {Post} from '../../services/post.service';
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

  constructor() {
  }

  ngOnInit() {
  }

}

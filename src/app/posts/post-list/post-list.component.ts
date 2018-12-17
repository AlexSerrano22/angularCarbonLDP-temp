import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  @Input() postsArray: Array<Post> = [];
  @Output() clickElement: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick(e) {
    this.clickElement.emit('hola');
  }

}

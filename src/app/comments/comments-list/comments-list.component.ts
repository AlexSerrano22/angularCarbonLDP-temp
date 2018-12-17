import {Component, OnInit} from '@angular/core';
import {Comment, CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {

  comment: Comment = {
    body: '',
  };
  comments: Array<Comment> = [];

  constructor(private _commentService: CommentsService) {
    /*this._commentService.getAllComments().subscribe((data) => {
      this.comments = data;
    });*/
  }

  ngOnInit() {
  }

  handleCreateComment() {
    /*this._commentService.createComment(this.comment).subscribe((data) => {
      this.comments.unshift(this.comment);
      this.comment = {
        body: '',
        created: new Date()
      };
    });*/
  }
}

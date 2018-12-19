import {Component, Input, OnInit} from '@angular/core';
import {Comment, CommentsService} from '../../services/comments.service';
import {Document} from 'carbonldp/Document';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() postID: string;
  comment: Comment = {
    body: '',
  };
  comments: Array<Comment> = [];

  constructor(private _commentService: CommentsService) {
  }

  ngOnInit() {
    this._commentService.getPostComments(this.postID).then((data) => {
      this.comments = data;
    });
  }

  handleCreateComment() {
    this._commentService.createComment(this.comment).then((comment: Comment & Document) => {
      this.comments.unshift(comment);
      return this._commentService.linkCommentToPost(this.postID, comment.$id);
    }).then(() => {
      this.comment = {
        body: '',
      };
    });
  }
}

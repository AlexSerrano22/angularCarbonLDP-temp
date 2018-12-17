import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from 'carbonldp/Document';

@Injectable({
  providedIn: 'root'
})
export class CommentsService implements CarbonComments {

  constructor(private _http: HttpClient) {
  }

  /*createComment(comment: Comment): Promise<Comment & Document> {
  }

  getPostComments(id: string): Promise<Array<Comment & Document>> {
  }

  linkCommentToPost(postID: string, commentID: string): Promise<Comment & Document> {

  }

  linkCommentToAuthor(authorID: string, commentID: string): Promise<Comment & Document>;
*/
}

export interface Comment {
  id?: number;
  body: string;
}

export interface CarbonComments {
  createComment(comment: Comment): Promise<Comment & Document>;

  getPostComments(id: string): Promise<Array<Comment & Document>>;

  linkCommentToPost(postID: string, commentID: string): Promise<Comment & Document>;

  linkCommentToAuthor(authorID: string, commentID: string): Promise<Comment & Document>;
}

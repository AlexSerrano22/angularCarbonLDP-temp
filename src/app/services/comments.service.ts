import {Injectable} from '@angular/core';
import {Document} from 'carbonldp/Document';
import {CarbonLDP} from 'carbonldp';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _carbon: CarbonLDP) {
  }

  createComment(comment: Comment): Promise<Comment & Document> {
    comment['types'] = ['Comment'];
    return this._carbon.documents.$create('comments/', comment);
  }

  getPostComments(postId: string): Promise<Array<Comment & Document>> {
    return this._carbon.documents.$getMembers(`${postId}comments/`);
  }

  linkCommentToPost(postID: string, commentID: string): Promise<any> {
    return this._carbon.documents.$addMember(`${postID}comments/`, commentID);
  }

  linkCommentToAuthor(authorID: string, commentID: string): Promise<any> {
    return this._carbon.documents.$addMember(`${authorID}comments/`, commentID);
  }
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

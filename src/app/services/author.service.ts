import {Injectable} from '@angular/core';
import {Document} from 'carbonldp/Document';

@Injectable({
  providedIn: 'root'
})
export class AuthorService implements CarbonAuthors {

  constructor() {
  }
/*

  createAuthor(author: Author): Promise<Author & Document>;

  linkPost(postID: string, authorID: string): Promise<Author & Document>;
*/

}

export interface Author {
  name: string;
}

export interface CarbonAuthors {
  createAuthor(author: Author): Promise<Author & Document>;

  linkPost(postID: string, authorID: string): Promise<Author & Document>;
}

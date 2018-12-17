import {Injectable} from '@angular/core';
import {Document} from 'carbonldp/Document';
import {CarbonLDP} from 'carbonldp';
import {URI} from 'carbonldp/RDF';

@Injectable({
  providedIn: 'root'
})
export class AuthorService implements CarbonAuthors {

  constructor(private _carbon: CarbonLDP) {
  }

  createAuthor(author: Author): Promise<Author & Document> {
    author['types'] = ['Author'];
    const slug = URI.getSlug(author.name);
    return this._carbon.documents.$create('authors/', author, slug);
  }

  linkPost(postID: string, authorID: string): Promise<Author & Document>;

}

export interface Author {
  name: string;
}

export interface CarbonAuthors {
  createAuthor(author: Author): Promise<Author & Document>;

  linkPost(postID: string, authorID: string): Promise<Author & Document>;
}

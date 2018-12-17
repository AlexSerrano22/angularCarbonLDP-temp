import {Injectable} from '@angular/core';
import {Document} from 'carbonldp/Document';
import {CarbonLDP} from 'carbonldp';
import {URI} from 'carbonldp/RDF';

@Injectable({
  providedIn: 'root'
})
export class PostService implements PostCarbon {

  constructor(private _carbon: CarbonLDP) {
  }

  createPost(post: Post): Promise<Post & Document> {
    const slug = URI.getSlug(post.title);
    post['types'] = ['Post'];
    return this._carbon.documents.$create('posts/', post, slug);
  }

  getPost(id: string): Promise<Post & Document>;

  getAllPosts(): Promise<Array<Post & Document>> {
    return this._carbon.documents.$getMembers('posts/');
  }


}


export interface PostCarbon {
  createPost(post: Post): Promise<Post & Document>;

  getAllPosts(): Promise<Array<Post & Document>>;

  getPost(id: string): Promise<Post & Document>;
}

export interface Post {
  id?: number;
  title: string;
  body: string;
}

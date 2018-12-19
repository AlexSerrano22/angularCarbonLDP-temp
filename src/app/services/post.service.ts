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

  getPost(id: string): Promise<Post & Document> {
    return this._carbon.documents.$get(`posts/${id}/`, _ => _
      .properties({
          'title': _.inherit,
          'body': _.inherit,
          'author': {
            'query': _ => _
              .withType('Author')
              .properties({
                'name': _.inherit
              })
          }
        }
      ));
  }

  getAllPosts(): Promise<Array<Post & Document>> {
    return this._carbon.documents.$getMembers('posts/', _ => _
      .properties({
          'title': _.inherit,
          'body': _.inherit,
          'author': {
            'query': _ => _
              .withType('Author')
              .properties({
                'name': _.inherit
              })
          }
        }
      ));
  }

  sub() {
    this._carbon.documents.$get('posts/').then((doc) => {
      doc.$onChildCreated((event) => {
        console.log(event.details.createdDocuments);
      }, (error) => {
        console.error(error);
      });
    });
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
  author?: string;
}

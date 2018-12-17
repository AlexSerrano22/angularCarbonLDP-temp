import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from 'carbonldp/Document';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) {
  }

  /*createPost(post: Post): Promise<Post & Document> {

  }

  getPost(id: string): Promise<Post & Document> {

  }

  getAllPosts(): Promise<Array<Post & Document>>{

  }*/


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

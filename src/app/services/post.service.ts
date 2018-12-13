import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../blog/blog.component';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) {
  }

  getPosts(): Observable<Array<Post>> {
    return this._http.get('http://localhost:3000/posts').pipe(map((data: Array<Post>) => data));
  }

  getPost(id): Observable<Post> {
    return this._http.get(`http://localhost:3000/posts/${id}`).pipe(map((data: Post) => data));
  }
}

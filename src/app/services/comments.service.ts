import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http: HttpClient) { }

  createComment() {

  }
}

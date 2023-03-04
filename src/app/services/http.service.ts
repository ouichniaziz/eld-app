import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, APIResponsePost, Post } from '../models';

@Injectable({
  providedIn: 'root',
})

export class HttpService {
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<APIResponse<Post>> {
    return this.http.get<APIResponse<Post>>('http://localhost:3001/api/posts');
  }

  getOnePost(id: string): Observable<APIResponsePost<Post>> {
    return this.http.get<APIResponsePost<Post>>(
      `http://localhost:3001/api/post/${id}`
    );
  }

  upVotePost(id: string): Observable<APIResponsePost<Post>> {
    return this.http.put<APIResponsePost<Post>>(
      `http://localhost:3001/api/postup/${id}`,
      null
    );
  }

  downVotePost(id: string): Observable<APIResponsePost<Post>> {
    return this.http.put<APIResponsePost<Post>>(
      `http://localhost:3001/api/postdown/${id}`,
      null
    );
  }
}

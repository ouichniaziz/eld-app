import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreatePost } from 'src/app/models';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  constructor(private http: HttpClient, private router: Router) {}
  onSubmit(data: CreatePost) {
    console.log(data);
    this.http.post('http://localhost:3001/api/post', data).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}

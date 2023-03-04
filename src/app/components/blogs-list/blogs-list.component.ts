import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIResponse, Post } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  public posts: Array<Post> | undefined;

  constructor(private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.httpService.getAllPosts().subscribe((posts: APIResponse<Post>) => {
      this.posts = posts.data;
    });
  }

  openPostDetails(id: string) {
    this.router.navigate(['post', id]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined;
  upvotes: number = 0;
  downvotes: number = 0;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.httpService.getOnePost(id).subscribe((post) => {
        this.post = post.data;
        this.upvotes = post.data.upvote;
        this.downvotes = post.data.downvote;
      });
    });
  }

  handleUpVote(id: string | undefined): void {
    this.httpService.upVotePost(id!).subscribe(() => {
      this.upvotes++;
    });
  }

  handleDownVote(id: string | undefined): void {
    this.httpService.downVotePost(id!).subscribe(() => {
      this.downvotes++;
    });
  }
}

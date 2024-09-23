import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from '../post';
import { HttpClient } from '@angular/common/http';
import { Comment } from 'src/app/comment/comment';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnChanges {
  @Input() post: Post | null = null;
  comments: Comment[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['post'] && this.post) {
      // Cambia esta URL según sea necesario
      this.http.get<{comments: Comment[]}>(`https://dummyjson.com/comments/post/${this.post.id}`).subscribe((response) => {
        this.comments = response.comments;
      });
    }
  }
}

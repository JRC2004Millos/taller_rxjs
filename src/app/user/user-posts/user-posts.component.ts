import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Post } from 'src/app/post/post';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent {
  @Input() userId: number | null | undefined = null;
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnChanges(): void {
    if (this.userId) {
      this.http.get<{posts: Post[]}>(`https://dummyjson.com/posts/user/${this.userId}`).subscribe((response) => {
        this.posts = response.posts;
      });
    }
  }
}

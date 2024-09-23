import { Component, Input } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent {
    @Input() comment: Comment | null = null;
}

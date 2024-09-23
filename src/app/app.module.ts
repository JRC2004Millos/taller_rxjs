import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { SearchUserComponent } from './user/search-user/search-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserPostsComponent } from './user/user-posts/user-posts.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentDetailComponent } from './comment/comment-detail/comment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    SearchUserComponent,
    UserPostsComponent,
    PostDetailComponent,
    CommentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { CutStringPipe } from './pipes/cut-string.pipe';
import { PostListComponent } from './posts/post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostComponent } from './posts/post/post.component';
import { CommentComponent } from './comments/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CutStringPipe,
    PostListComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

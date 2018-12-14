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
import { CommentsListComponent } from './comments/comments-list/comments-list.component';
import { HeaderComponent } from './nav/header/header.component';
import {CarbonLDP} from 'carbonldp';
import carbon from './carbon/carbon.config';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CutStringPipe,
    PostListComponent,
    PostComponent,
    CommentComponent,
    CommentsListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: CarbonLDP, useValue: carbon
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

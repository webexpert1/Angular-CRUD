import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {PostsService} from '../posts.service';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdatedListner()
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
  } // end ngOnInit

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}

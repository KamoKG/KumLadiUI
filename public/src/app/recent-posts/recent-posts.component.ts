import { Component, OnInit, Input } from '@angular/core';
// import {CPU} from '../cpu';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
    @Input() rp_Posts;
  constructor() { }

  ngOnInit() {
  }

}

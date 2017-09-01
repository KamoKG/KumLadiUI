import { Component, OnInit, Input } from '@angular/core';
import {MediatorService} from "../mediator.service";
// import {CPU} from '../cpu';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    @Input() buzz_comments;
    @Input() user_name;
    @Input() co_Posts;
    constructor(private _mediatorService: MediatorService) { }

  ngOnInit() {
      // this.getPosts();
  }

    // getPosts(){
    //     this._mediatorService.getPosts()
    //         .then(postCentral => this.postCentral = postCentral)
    //         .catch(err => console.log(err));
    // }
}

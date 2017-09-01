import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {MediatorService} from "../mediator.service";
import {Post} from "../post";
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
    @Output() sp_selectedItem = new EventEmitter();
    constructor(private _mediatorService: MediatorService) { }

  ngOnInit() {
      // this.getPosts();
  }
    selectedSibling(postToDelete: string)
    {
        this.sp_selectedItem.emit(postToDelete);

    }

    // getPosts(){
    //     this._mediatorService.getPosts()
    //         .then(postCentral => this.postCentral = postCentral)
    //         .catch(err => console.log(err));
    // }
}

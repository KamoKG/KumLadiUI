import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
// import {CPU} from "../cpu";
import {MediatorService} from "../mediator.service";
import {Post} from "../post";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    // newPost = new Post();
    // newPost:Post;
    @Input() mess_Post;
    @Output() createNewPostEvent = new EventEmitter();

  constructor(private  _mediatorService: MediatorService) { }


  ngOnInit() {
  }

  create(){
    // call server to save
    //   this.createNewPostEvent.emit(this.newPost);
    //   this.newPost = new Post();
  }

}

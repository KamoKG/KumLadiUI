import { Component } from '@angular/core';
import {Post} from './post';
import Appbar from 'muicss/lib/react/appbar';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';

import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MediatorService} from "./mediator.service";
import {SuperPost} from "./super-post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Buzz';

    user_studentNum = 'U12345678';

    postCentral: Array<Post>  = [];
    app_module: string = '';
    app_content: string = '';
    user_bounty = 321;
    user_points = 1245;
    newPost: Post;
    postOffice: SuperPost = new SuperPost([],[],this._mediatorService);
    sm_Posts: Array<Post>  = [];
    sp_Posts: Array<Post>  = [];
    ladderPosts: Array<Array<Post>>  = [];
    mess_Post: Post = null;
    co_Posts: Array<Post> = [];
    buzz_comments = [];
    buzz_siblings = [];
    dummy: Array<Post> = [];
    idForMe : string;
    tags: Array<String> = [];
    level: Number;
    constructor(private _mediatorService: MediatorService){}

    createNewModule(){
        var date = new Date();
        this.newPost = new Post(this.app_module , 0, [],[],"-1", this.app_content, this.app_module, "15110045",
            new Date(Date.now()) , true);
        this.create(this.newPost);
    }

    create(newPost: Post){
        // this._mediatorService.createPost(newPost)
        //     .then(status => this.getAllPosts())
        //     .catch(err => console.log(err));
        // this.postCentral.push(newPost);
    }

    makeThread(w: Post )
    {
        // this.newPost = new Post( w[0] , "0", [],[], w[1], w[2], w[3], "15110045",
        //     null , true);
        // console.log("We Here2");
        // this.create(w);
    }

    destroy(toDelete: Post)
    {
        // let i = this.postCentral.indexOf(toDelete);
        // this.postCentral.splice(i, 1);
    }

    getPosts2()
    {
        // this._mediatorService.getPosts()
        //     .then(postCentral => this.postCentral = postCentral)
        //     .catch(err => console.log(err));
    }

    getAllPosts(x: string )
    {
        this._mediatorService.getLevelZeros(x)
            .then(sm_Posts => this.sm_Posts = sm_Posts)
            .catch(err => console.log(err));

        // this.postOffice.populate(this.sm_Posts, 0);
        this.populatePostOffice(this.postOffice,  this.sm_Posts, 0);
    }

    populatePostOffice(x: SuperPost,  x_list: Array<Post>, v : number)
    {
        if (v < 2)
        {
            return ;
        }
        else
        {
            x.child_list = [];

            x.supers = [];
            for (var i = 0; i > x_list.length; i++)
            {
                x.child_list.push(x_list[i]);
                x.supers.push(new SuperPost([],[],this._mediatorService));
                {
                    // ;
                    // let w : Post[] = new Array<Post>();
                    console.log("P Called: "+ x_list[i].postID);
                    // this._mediatorService.getChildPosts("59a2c68c1ec68404e0615080")
                    //     .then(sm_Posts => this.sm_Posts = sm_Posts)
                    //     .catch(err => console.log(err));
                    // ;
                    // this.dummy = this.sm_Posts;
                    // this._mediatorService.getChildPosts("59a2c68c1ec68404e0615080")
                    //     .then(dummy => this.dummy = dummy)
                    //     .catch(err => console.log(err));
                    // ;
                    if (this.dummy != null)
                        console.log("W: "+JSON.stringify(this.dummy));
                    console.log("Dummy: "+this.dummy);
                    console.log("smPost: "+this.sm_Posts);

                    if (this.dummy != null && this.dummy.length > 0)
                    {
                        // this.populatePostOffice(x.supers[i], this.dummy, v++);
                        console.log("Populate Clled");
                    }
                }
            }
        }
    }

    setSibs(choosenId: string)
    {
        this.sp_Posts = [];
        // this._mediatorService.getChildPosts(choosenId)
        //     .then(co_Posts => this.co_Posts = co_Posts)
        //     .catch(err => console.log(err));

        this._mediatorService.getChildPosts(choosenId)
            .then(sp_Posts => this.sp_Posts = sp_Posts)
            .catch(err => console.log(err));

        // this.ladderPosts[1] = (this.sp_Posts);
    }

    setMessage(choosenId: string)
    {
        this._mediatorService.getContent(choosenId)
            .then(mess_Post => this.mess_Post = mess_Post)
            .catch(err => console.log(err));

        this._mediatorService.getChildPosts(choosenId)
            .then(co_Posts => this.co_Posts = co_Posts)
            .catch(err => console.log(err));
    }

    createRespond()
    {
        // var date = new Date();
        // console.log("Here++++++++++++++++++++++++++++++++++++++++++++++++");
        // console.log("Here is the respnseID: "+this.mess_Post[0].heading+ " lvl: "+this.mess_Post[0].level_number+ "parId: "+this.idForMe);
        // this.newPost = new Post(this.app_module ,this.level.valueOf()+1, [], this.tags ,this.idForMe, this.app_content, this.app_module, "15110045",
        //     new Date(Date.now()) , true);
        // this.create(this.newPost);
        //
        // // this.setMess(this.idForMe);
        // this.tags = [];
        //
        // this.co_Posts.push(this.newPost);

    }
}

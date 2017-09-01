webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<app-nav-bar></app-nav-bar>\n<app-side-menu [sm_Posts]=\"sm_Posts\" [postOffice]=\"postOffice\" (selectedMenuItem)=\"setSibs($event)\" (loadedFirst)=\"getAllPosts('COS101')\"></app-side-menu>\n\n<app-recent-posts [rp_Posts]=\"rp_Posts\"></app-recent-posts>\n<app-messages (createNewPostEvent)=\"create($event)\" [mess_Post]=\"mess_Post\"></app-messages>\n<app-status-bar></app-status-bar>\n<app-sibling-posts [sp_Posts]=\"sp_Posts\" (sp_selectedItem)=\"setMessage($event)\"></app-sibling-posts>\n<app-subs-list></app-subs-list>\n<app-comments [co_Posts]=\"co_Posts\" (sp_selectedItem)=\"setMessage2($event)\"></app-comments>\n\n<link rel=\"stylesheet\" href=\"https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css\">\n\n<!--<button (click)=\"getAllPosts('COS101')\" onclick=\"$('h1, h2, .panel').toggleClass('blue');\">X</button>-->\n<div ondragover=\"drag_over(event)\" ondrop=\"drop(event)\">\n    <!--<button onclick=\"document.getElementById('div_main').style.display = 'inline'\">Reply</button>-->\n    <div id=\"div_main\" style=\"height:100vh; width:100%; border:3px solid white; top:0px; left:0px; position: absolute; display:none\">\n        <div id=\"\" style=\"height:100vh; width:100%; border:3px solid white; background-color:#000; opacity: 0.4; top:0px; left:0px; position: absolute; display:none\">\n        </div>\n            <div id=\"txt1\" draggable=\"true\" ondragstart=\"drag_start(event)\" style=\"opacity:1.0; height: 300px; color: white\">\n                <div class=\"div_dance_header\" style=\"opacity:1.0\">\n                    <button type=\"button\" class=\"cancel_dance\" style=\"color:black; opacity:1.0\" onclick=\"document.getElementById('div_main').style.display = 'none'\">&times;</button>\n                    <h3>Create Module</h3>\n                </div>\n                <br>\n                <br>\n                <div class=\"form-group\">\n                    <label >Course Code:</label><button type=\"button\" class=\"btn btn-warning\" style=\"float:right\" (click)=\"createNewModule()\" onclick=\"document.getElementById('div_main').style.display = 'none'\">Create Module</button>\n                    <input type=\"text\" value=\"{{sm_moduleName}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"sm_moduleName\">\n                    <input type=\"text\" value=\"{{sm_moduleName}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"sm_moduleName\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"comment\">Module description:</label>\n                    <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"app_content\"></textarea>\n                </div>\n                <br>\n            </div>\n\n        <div id=\"txt2\" draggable=\"true\" ondragstart=\"drag_start(event)\" style=\"opacity:1.0; height: 600px;\">\n            <div class=\"div_dance_header\" style=\"opacity:1.0\">\n                <button type=\"button\" class=\"cancel_dance\" style=\"color:black; opacity:1.0\" onclick=\"document.getElementById('div_main').style.display = 'none'\">&times;</button>\n                <h3>Reply to Post</h3>\n            </div>\n            <br>\n            <br>\n            <div class=\"panel-body banana\" style=\"width: 100%; height: 200px; background-color: white; overflow-y: scroll\" *ngIf=\"mess_Post\">\n                <h1><b>{{mess_Post.heading}}</b></h1>\n                <p>{{mess_Post.module}} {{mess_Post.content}}</p>\n                <p style=\"float: right\"><i>Posted on {{mess_Post.timestamp}}</i></p>\n                <br><br>\n                <div class=\"chip\">\n\n                    <div></div></div><br>\n            </div>\n            <div class=\"form-group\">\n                <label >Module Name:</label><button type=\"button\" class=\"btn btn-warning\" style=\"float:right\" (click)=\"createRespond()\" onclick=\"document.getElementById('div_main').style.display = 'none'\">Create Response</button>\n                <input type=\"text\" *ngIf=\"mess_Post\" class=\"form-control\" style=\"width: 200px\" value=\"{{sm_moduleName}}\" disabled>\n                <label >Enter Heading:</label><input type=\"text\" class=\"form-control\" style=\"width: 200px\" >\n            </div>\n            <div class=\"form-group\">\n                <label for=\"comment\">Message Content:</label>\n                <textarea class=\"form-control\" rows=\"5\" value=\"{{newContent}}\" [(ngModel)]=\"newContent\"></textarea>\n            </div>\n            <div class=\"well\" style=\"width: 90%; height: 30px; padding: 0px; margin-top: 5px; background-color: white\">\n                <div *ngFor=\"let t of tags\" style=\" display: inline-flex; float: left; margin-left: 5px; margin-bottom: 10px; width: 80px; height: 30px; background-color: deepskyblue; border-radius: 8px; border: dashed 1px darkslateblue\">\n                    <span style=\"color: white; font-size: 20px\"> # </span><p contenteditable=\"true\">{{t}}</p>\n                </div>\n                <div *ngIf=\"tags.length < 6\" style=\"font-size: 20px; display: inline\" (click)=\"tags.push('newTag')\"><span class=\"glyphicon glyphicon-plus-sign\"></span></div>\n            </div>\n            <br>\n        </div>\n    </div>\n</div>\n\n<style>\n    .div_dance_header{\n        width: 100%;\n        height: 30px;\n        opacity: 1.0;\n        background-color: black;\n        color: white;\n        /*            font-size: 50px;*/\n\n    }\n\n    .cancel_dance{\n        float: right;\n    }\n\n\n\n    .div_dance_message{\n        width: 94%;\n        background-color: white;\n        height: 200px;\n        margin-left: 20px;\n        margin-top: 30px;\n    }\n\n    #txt1, #txt2{\n        width:600px;\n        height: 580px;\n        background-color:#777;\n        position:absolute;\n        border-radius: 20px;\n        border: 3px solid green;\n    }\n\n    #txt1, #txt2 .glyphicon:hover{\n        color: green;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__super_post__ = __webpack_require__("../../../../../src/app/super-post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.title = 'Buzz';
        this.user_studentNum = 'uXXXXXX';
        this.sm_moduleName = 'COS101';
        //Remember COS101 is not integrated yet to other components
        this.app_module = '';
        this.app_content = '';
        this.user_bounty = 321;
        this.user_points = 1245;
        this.postOffice = new __WEBPACK_IMPORTED_MODULE_3__super_post__["a" /* SuperPost */]([], [], this._mediatorService);
        this.sm_Posts = [];
        this.sp_Posts = [];
        this.rp_Posts = [];
        this.ladderPosts = [];
        this.mess_Post = null;
        this.co_Posts = [];
        this.buzz_comments = [];
        this.buzz_siblings = [];
        this.dummy = [];
        this.tags = [];
        this.newContent = '';
    }
    AppComponent.prototype.createNewModule = function () {
        var date = new Date();
        this.newPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */](this.app_module, 0, [], [], "-1", this.app_content, this.app_module, "15110045", new Date(Date.now()), true);
        this.create(this.newPost);
    };
    AppComponent.prototype.create = function (newPost) {
        // this._mediatorService.createPost(newPost)
        //     .then(status => this.getAllPosts())
        //     .catch(err => console.log(err));
        // this.postCentral.push(newPost);
    };
    AppComponent.prototype.makeThread = function (w) {
        // this.newPost = new Post( w[0] , "0", [],[], w[1], w[2], w[3], "15110045",
        //     null , true);
        // console.log("We Here2");
        // this.create(w);
    };
    AppComponent.prototype.destroy = function (toDelete) {
        // let i = this.postCentral.indexOf(toDelete);
        // this.postCentral.splice(i, 1);
    };
    AppComponent.prototype.getPosts2 = function () {
        // this._mediatorService.getPosts()
        //     .then(postCentral => this.postCentral = postCentral)
        //     .catch(err => console.log(err));
    };
    AppComponent.prototype.getAllPosts = function (x) {
        var _this = this;
        this._mediatorService.getLevelZeros(x)
            .then(function (sm_Posts) { return _this.sm_Posts = sm_Posts; })
            .catch(function (err) { return console.log(err); });
        // this.postOffice.populate(this.sm_Posts, 0);
        this.populatePostOffice(this.postOffice, this.sm_Posts, 0);
        this.setRecentPosts(x);
    };
    AppComponent.prototype.populatePostOffice = function (x, x_list, v) {
        if (v < 2) {
            return;
        }
        else {
            x.child_list = [];
            x.supers = [];
            for (var i = 0; i > x_list.length; i++) {
                x.child_list.push(x_list[i]);
                x.supers.push(new __WEBPACK_IMPORTED_MODULE_3__super_post__["a" /* SuperPost */]([], [], this._mediatorService));
                {
                    // ;
                    // let w : Post[] = new Array<Post>();
                    console.log("P Called: " + x_list[i].postID);
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
                        console.log("W: " + JSON.stringify(this.dummy));
                    console.log("Dummy: " + this.dummy);
                    console.log("smPost: " + this.sm_Posts);
                    if (this.dummy != null && this.dummy.length > 0) {
                        // this.populatePostOffice(x.supers[i], this.dummy, v++);
                        console.log("Populate Clled");
                    }
                }
            }
        }
    };
    AppComponent.prototype.setSibs = function (choosenId) {
        var _this = this;
        this.sp_Posts = [];
        // this._mediatorService.getChildPosts(choosenId)
        //     .then(co_Posts => this.co_Posts = co_Posts)
        //     .catch(err => console.log(err));
        this._mediatorService.getChildPosts(choosenId)
            .then(function (sp_Posts) { return _this.sp_Posts = sp_Posts; })
            .catch(function (err) { return console.log(err); });
        // this.ladderPosts[1] = (this.sp_Posts);
    };
    AppComponent.prototype.setMessage = function (choosenId) {
        var _this = this;
        this.idForMe = choosenId;
        this._mediatorService.getContent(choosenId)
            .then(function (mess_Post) { return _this.mess_Post = mess_Post; })
            .catch(function (err) { return console.log(err); });
        this._mediatorService.getChildPosts(choosenId)
            .then(function (co_Posts) { return _this.co_Posts = co_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.setMessage2 = function (choosenId) {
        var _this = this;
        this._mediatorService.getContent(choosenId)
            .then(function (mess_Post) { return _this.mess_Post = mess_Post; })
            .catch(function (err) { return console.log(err); });
        this.setResponses(choosenId);
    };
    AppComponent.prototype.setResponses = function (choosenId) {
        var _this = this;
        this._mediatorService.getChildPosts(choosenId)
            .then(function (co_Posts) { return _this.co_Posts = co_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.setRecentPosts = function (moduCode) {
        var _this = this;
        this._mediatorService.getRecentPosts(moduCode)
            .then(function (rp_Posts) { return _this.rp_Posts = rp_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.createRespond = function () {
        var _this = this;
        var date = new Date();
        console.log(this.mess_Post);
        console.log("New Post Content \nheading: " + this.mess_Post.heading + "\nlvl: " + this.mess_Post.level_number + "\nparId: " + this.idForMe);
        console.log("New Post Content \ncontent: " + this.newContent);
        this.newPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */](this.mess_Post.heading, 0, [], this.tags, this.idForMe, this.newContent, this.sm_moduleName, 'uXXXXXXXX', null, true, '');
        this._mediatorService.createResponce(this.idForMe, this.newPost)
            .then(function (status) { _this.setResponses(_this.idForMe); })
            .catch(function (err) { return console.log(err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__status_bar_status_bar_component__ = __webpack_require__("../../../../../src/app/status-bar/status-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subs_list_subs_list_component__ = __webpack_require__("../../../../../src/app/subs-list/subs-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sibling_posts_sibling_posts_component__ = __webpack_require__("../../../../../src/app/sibling-posts/sibling-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recent_posts_recent_posts_component__ = __webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import {NglModule} from 'ng-lightning';



// import { Messages2Component } from './src/app/messages2/messages2.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_7__side_menu_side_menu_component__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__status_bar_status_bar_component__["a" /* StatusBarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__["a" /* CommentsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__subs_list_subs_list_component__["a" /* SubsListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__sibling_posts_sibling_posts_component__["a" /* SiblingPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__recent_posts_recent_posts_component__["a" /* RecentPostsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__["a" /* LandingComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng_lightning__["a" /* NglModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__mediator_service__["a" /* MediatorService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat\n{\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.chat li\n{\n\tmargin-bottom: 10px;\n\tpadding-bottom: 5px;\n\tborder-bottom: 1px dotted #B3A9A9;\n}\n\n.chat li.left .chat-body\n{\n\tmargin-left: 60px;\n}\n\n.chat li.right .chat-body\n{\n\tmargin-right: 60px;\n}\n\n\n.chat li .chat-body p\n{\n\tmargin: 0;\n\tcolor: #777777;\n}\n\n.panel .slidedown .glyphicon, .chat .glyphicon\n{\n\tmargin-right: 5px;\n}\n\n.panel-body\n{\n\toverflow-y: scroll;\n\theight: 250px;\n}\n\n::-webkit-scrollbar-track\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n\tbackground-color: #F5F5F5;\n}\n\n::-webkit-scrollbar\n{\n\twidth: 12px;\n\tbackground-color: #F5F5F5;\n}\n\n::-webkit-scrollbar-thumb\n{\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\n\tbackground-color: #555;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"panel panel-default\" id=\"message\">-->\n<!--<ngl-badge>Badge</ngl-badge>-->\n<!--</div>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as io from "socket.io-client";
var ChatComponent = (function () {
    function ChatComponent() {
        // socket = io('http://localhost:4000');
        this.newPost = { course_code: '', content: '', heading: '', student_number: '', tag_list: [''] };
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.newPost = {
            course_code: 'COS132',
            content: 'I keep constantly getting zero on submission',
            heading: 'Help with fitchfork',
            student_number: '11111111',
            tag_list: ['C++']
        };
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"comments\" >\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <h3 class=\"panel-title\">Responses</h3>\n  </div>\n  <div class=\"panel-body\" id=\"x13\" style=\"width: 100%; height: 90%; overflow-y: scroll\" >\n    <div *ngFor=\"let message of co_Posts\" style=\"width:100%; height: 70px; padding: 0px; margin-bottom: 8px\" class=\"banana well\" (click)=\"selectedSibling(message.postID)\">\n        <p style=\"float: right\"><i>Posted on:</i></p>\n        <p ><span style=\"font-size: 20px; margin-left: 10px; margin-top: 5px\">{{message.heading}}</span></p>\n        <div class=\"chip\" >\n\n            <div></div></div><br>\n\n    <br><br>\n\n    <!--<div style=\"background-color: #985f0d\"><button disabled class=\"btn btn-success\"><b>{{post.tags}}</b></button></div>-->\n    </div>\n      <div *ngIf=\"(co_Posts.length == 0)\">No responses to current message</div>\n    </div>\n</div>\n\n<style>\n    .banana:hover{\n        background: greenyellow;\n        cursor:pointer;\n    }\n    .chip {\n        display: inline-block;\n        float: right;\n        /*padding: 0 25px;*/\n        height: 30px;\n        font-size: 16px;\n        line-height: 50px;\n        border-radius: 25px;\n        background-color: #BBB;\n        padding-left: 20px;\n    }\n\n    .chip div {\n        float: right;\n        /*margin: 0 10px 0 -25px;*/\n        padding-left: 30px;\n        height: 45px;\n        width: 45px;\n        border-radius: 100%;\n        background-color: #000;\n        border: 4px solid #BBB;\n        padding-bottom: 30px;\n        padding-left: 0px;\n    }\n</style>"

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {CPU} from '../cpu';
var CommentsComponent = (function () {
    function CommentsComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.sp_selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    CommentsComponent.prototype.ngOnInit = function () {
        // this.getPosts();
    };
    CommentsComponent.prototype.selectedSibling = function (postToDelete) {
        this.sp_selectedItem.emit(postToDelete);
    };
    return CommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "buzz_comments", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "user_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "co_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "sp_selectedItem", void 0);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], CommentsComponent);

var _a;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"jumbotron text-center\">\n  <h1>Welcome to the Buzz Community</h1>\n  <p class=\"lead\">A gamification based online forum that works and plays hard!</p>\n    <button style=\"width: 10%; height: 50%\" type=\"button\" nglButton=\"success\" [routerLink]=\"['/login']\">Login</button>\n    <button class=\"btn btn-default\" [routerLink]=\"['/tour']\">Take a tour</button>\n</div>-->\n\n<!-- Main jumbotron for a primary marketing message or call to action -->\n\n<!--<div class=\"jumbotron text-center\">-->\n  <!--<div class=\"container\">-->\n    <!--<h1>Welcome to the Buzz Community</h1>-->\n    <!--<p>A <i>gamification</i> based online educational forum that works and plays hard!</p>-->\n    <!--<div>-->\n      <!--<a class=\"btn btn-primary btn-lg\" role=\"button\" routerLink='login'>Login</a>-->\n      <!--<a class=\"btn btn-default btn-lg\" role=\"button\" routerLink='tour'>Take a Tour &raquo;</a>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n<!--<app-info id=\"OtherX\"></app-info>-->\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {AuthService} from '../services/auth.service';
// import {User} from "../user/user";
var LandingComponent = (function () {
    function LandingComponent() {
        // this.userInstance = new User('u1364577','JLD', 'Rego Bae', 'Maseko', 'baeba@gmail.com', '0784513211', 'COS 333, COS 122, COS 330, WTW 236', 'Ckuckzz', 'Dr');
        this.login = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.loginStart = function () {
        this.login = true;
    };
    LandingComponent.prototype.loginStop = function () {
        this.login = false;
    };
    LandingComponent.prototype.onLoginClicked = function () {
        // this.authService.addUser(this.userInstance)
        //   .then(status => console.log("User added to DB"))
        //   .catch(error => console.log(error));
    };
    LandingComponent.prototype.onTour = function () {
        // this.authService.getUser(this.userInstance)
        //   .then(Response => Response.toString())
        //   .catch(error => console.log(error.toString()));
        /*this.authService.getAll()
          .then( body => console.log("All: " + body.toString()))
          .catch(error => console.log(error));*/
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/mediator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from "./cpu";


var MediatorService = (function () {
    function MediatorService(_http) {
        this._http = _http;
    }
    MediatorService.prototype.createResponce = function (x, p) {
        console.log("CALLED CREATE RESPONCE-POST");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/addPost/" + x, p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    MediatorService.prototype.getLevelZeros = function (x) {
        console.log("CALLED GET LEVEL ONES");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getAllPosts/" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    MediatorService.prototype.getChildPosts = function (x) {
        console.log("CALLED GET CHILDREN of " + x);
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getChildPosts/" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    MediatorService.prototype.getRecentPosts = function (x) {
        console.log("CALLED GET CHILDREN of " + x);
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getRecentPosts/" + x)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    MediatorService.prototype.getContent = function (x) {
        console.log("CALLED GET CONTENT of " + x);
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getContent/" + x, options)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    MediatorService.prototype.getPosts = function () {
        // let authToken = localStorage.getItem('auth_token');
        // let headers = new Headers({"Accept":"application/json"});
        // headers.append('Authorization','Bearer ${authToken}');
        // let options = new RequestOptions({headers:headers});
        // return this._http.get("http://localhost:1337/posts")
        //     .map(data => data.json())
        //     .toPromise();
    };
    return MediatorService;
}());
MediatorService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MediatorService);

var _a;
//# sourceMappingURL=mediator.service.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"message\">\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <h3 class=\"panel-title\"> Messages <span class=\"glyphicon glyphicon-pushpin\" style=\"float: right\" onclick=\"$('#x13').toggle()\"></span></h3>\n\n  </div>\n  <div class=\"panel-body banana\" id=\"x13\" style=\"width: 100%; height: 90%; overflow-y: scroll\" *ngIf=\"mess_Post\">\n    <h1><b>{{mess_Post.heading}}</b></h1><br>\n    <p >{{mess_Post.module}} {{mess_Post.content}}</p>\n    <p style=\"float: right\"><i>Posted on {{mess_Post.timestamp}}</i></p>\n    <br><br>\n    <div class=\"chip\">\n\n      <div></div></div><br><br>\n  </div>\n  <div style=\"height: 28px; width: 100%; background-color: white; position: absolute; padding-left: 0px; left: 0px; bottom: 0px; font-size: 20px; color: black\">\n    <span class=\"glyphicon glyphicon-comment\" style=\"padding-left: 50%\" onclick=\"document.getElementById('div_main').style.display = 'inline';document.getElementById('txt1').style.display = 'none'; document.getElementById('txt2').style.display = 'inline'; \">\n    <!--<span class=\"glyphicon glyphicon-comment\" style=\"padding-left: 50%\" onclick=\"document.getElementById('div_main').style.display = 'inline';document.getElementById('txt1').style.display = 'none'; document.getElementById('txt2').style.display = 'inline'; document.getElementById('x2222').innerHTML = document.getElementsByClassName('banana')[0].innerHTML\">-->\n\n    </span>\n  </div>\n</div>\n\n<style>\n  .glyphicon-comment:hover{\n    color: deepskyblue;\n  }\n\n\n</style>"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from "../cpu";

var MessagesComponent = (function () {
    function MessagesComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.createNewPostEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.create = function () {
        // call server to save
        //   this.createNewPostEvent.emit(this.newPost);
        //   this.newPost = new Post();
    };
    return MessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "mess_Post", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "createNewPostEvent", void 0);
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], MessagesComponent);

var _a;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\n      </button>\n     <!-- <a class=\"navbar-brand\" href=\"#\">Buzz</a>-->\n      <a href=\"#\" class=\"btn btn-toolbar btn-lg\" id=\"menuCon\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </button>\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a href=\"#\">Buzz<span class=\"sr-only\">(current)</span></a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Bounty <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\"></a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-bullhorn\"></span> Bounty Questions</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Resolved Questions</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-edit\"></span> New Bounty Post</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-xbt\"></span> Total claimable Bounty: 236</a></li>\n          </ul>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\" class=\"lass\"><span class=\"glyphicon glyphicon-piggy-bank\"></span> {{user_bounty}}</a></li>\n        <li><a href=\"#\" class=\"lass\"><span class=\"glyphicon glyphicon-certificate\"></span> {{user_points}}</a></li>\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\"><b>{{user_studentNum}}, {{user_name}}</b></a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-comment\"></span> Chats</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-bell\"></span> Interactions</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-th-large\"></span> My Groups</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-wrench\"></span> Profile</a></li>\n            <li><a href=\"#\"></a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-flag\"></span> Forum Help</a></li>\n            <li onclick=\"$('button').click(function(){$('h1, h2, .panel').toggleClass('blue');});\"><a href=\"#\" ><span class=\"glyphicon glyphicon-cog\" ></span> Settings</a></li>\n            <li><a href=\"#\"><span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span> Sign-Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n\n<style>\n\n  .blue{\n      background-color: black;\n  }\n</style>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(heading, level_number, child_list, tag_list, parent_ID, content, course_code, student_number, timestamp, visibility, postID) {
        if (heading === void 0) { heading = ''; }
        if (child_list === void 0) { child_list = []; }
        if (tag_list === void 0) { tag_list = []; }
        if (parent_ID === void 0) { parent_ID = ''; }
        if (content === void 0) { content = ''; }
        if (course_code === void 0) { course_code = ''; }
        if (student_number === void 0) { student_number = ''; }
        if (postID === void 0) { postID = ''; }
        this.heading = heading;
        this.level_number = level_number;
        this.child_list = child_list;
        this.tag_list = tag_list;
        this.parent_ID = parent_ID;
        this.content = content;
        this.course_code = course_code;
        this.student_number = student_number;
        this.timestamp = timestamp;
        this.visibility = visibility;
        this.postID = postID;
        console.log('Post object created\n\n');
    }
    Post.prototype.getChildren = function (x) {
        // console.log(this.heading+" PI:"+this.postID+" x:"+x);
        // var toReturn: CPU[] = null;
        // if (this.postID === x)
        // {
        //     console.log("SUCCESS");
        //     return this.children;
        // }
        // else {
        //     for (var i = 0 ; i < this.children.length; i++)
        //     {
        //         toReturn = this.children[i].getChildren(x);
        //         if (toReturn != null)
        //             break;
        //     }
        // }
        // return toReturn;
    };
    Post.prototype.getMessage = function (x) {
        // console.log(this.heading+" PI:"+this.postID+" x:"+x);
        // var toReturn: CPU = null;
        // if (this.postID === x)
        // {
        //     console.log("SUCCESS");
        //     return this;
        // }
        // else {
        //     for (var i = 0 ; i < this.children.length; i++)
        //     {
        //         toReturn = this.children[i].getMessage(x);
        //         if (toReturn != null)
        //             break;
        //     }
        // }
        // return toReturn;
    };
    Post.prototype.getId = function () {
        // return this._id;
    };
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/recent-posts/recent-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recent-posts/recent-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"recent\">\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <h3 class=\"panel-title\">Recent Posts <span class=\"glyphicon glyphicon-pushpin\" style=\"float: right\" onclick=\"$('#x11').toggle()\"></span></h3>\n  </div>\n  <div class=\"panel-body\" id=\"x11\" style=\"font-size: 12px; width: 100%; height: 88%; overflow-y: scroll; resize: both;\">\n      <div class=\"well banana2\" *ngFor=\"let p of rp_Posts\" style=\"font-size: 15px; width:100%; height: 40px; padding: 0px; margin-bottom: 6px\" (click)=\"selectedSibling(p.postID)\">\n        {{p.heading}}\n      </div>\n    <div *ngIf=\"(rp_Posts.length == 0)\">\n      No responses to current message\n    </div>\n  </div>\n</div>\n<style>\n  .banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n  }\n  .chip {\n    display: inline-block;\n    float: right;\n    /*padding: 0 25px;*/\n    height: 30px;\n    font-size: 16px;\n    line-height: 50px;\n    border-radius: 25px;\n    background-color: #BBB;\n    padding-left: 20px;\n  }\n\n  .chip div {\n    float: right;\n    /*margin: 0 10px 0 -25px;*/\n    padding-left: 30px;\n    height: 45px;\n    width: 45px;\n    border-radius: 100%;\n    background-color: #000;\n    border: 4px solid #BBB;\n    padding-bottom: 30px;\n    padding-left: 0px;\n  }\n\n  .glyphicon-th:hover{\n    color: lawngreen;\n  }\n\n  .tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n  }\n</style>"

/***/ }),

/***/ "../../../../../src/app/recent-posts/recent-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from '../cpu';
var RecentPostsComponent = (function () {
    function RecentPostsComponent() {
    }
    RecentPostsComponent.prototype.ngOnInit = function () {
    };
    return RecentPostsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], RecentPostsComponent.prototype, "rp_Posts", void 0);
RecentPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-recent-posts',
        template: __webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecentPostsComponent);

//# sourceMappingURL=recent-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/sibling-posts/sibling-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sibling-posts/sibling-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"sibb\">\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <div style=\"float: right\">\n      <button onclick=\"$('#div_sp_tools').slideToggle();\" class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-th \" style=\"float: right\" onclick=\"$('#x12').toggle()\"></span>\n      </button>\n    <div id=\"div_sp_tools\" class=\"wall\" style=\"position: fixed; background-color: #BBB; border: 1px solid grey; border-radius: 5px; display: none; width: 60px; height: 60px; \">\n        <div  class=\"tools\" style=\"height: 30px; width: 30px; border: 1px solid darkgrey; border-radius: 5px; \">\n          <span class=\"glyphicon glyphicon-search\" style=\"font-size: 20px\"></span>\n        </div>\n        <div class=\"tools\" onclick=\"$('#sibb').animate({top: '-190px', opacity: '0.0'}).hide(1000);\" style=\"height: 30px; width: 30px; border: 1px solid darkgrey; border-radius: 5px; \">\n          <span class=\"\tglyphicon glyphicon-resize-small\" style=\"font-size: 20px\"></span>\n        </div>\n    </div>\n    </div>\n    <h3 class=\"panel-title\">Related - Posts</h3>\n\n  </div>\n  <div class=\"panel-body\" style=\"font-size: 12px; height:86%; overflow-y:scroll; color: #333\">\n      <div class=\"well banana2\" *ngFor=\"let p of sp_Posts\" style=\"font-size: 15px; width:100%; height: 40px; padding: 0px; margin-bottom: 6px\" (click)=\"selectedSibling(p.postID)\">{{p.heading}}-<p style=\"float: right; \"><i>{{p.timestamp}}</i></p></div>\n  </div>\n</div>\n\n<style>\n\n  /*.siblingOption:hover{*/\n    /*color: blue;*/\n    /*cursor: pointer;*/\n  /*}*/\n  .banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n  }\n\n  .glyphicon-th:hover{\n    color: lawngreen;\n  }\n\n  .tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n  }\n</style>"

/***/ }),

/***/ "../../../../../src/app/sibling-posts/sibling-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiblingPostsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from '../cpu';

var SiblingPostsComponent = (function () {
    // posts: Array<CPU> = [];
    //
    function SiblingPostsComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.sp_selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SiblingPostsComponent.prototype.ngOnInit = function () {
    };
    SiblingPostsComponent.prototype.createNewPost = function (x) {
    };
    SiblingPostsComponent.prototype.getPosts = function () {
    };
    SiblingPostsComponent.prototype.selectedSibling = function (postToDelete) {
        this.sp_selectedItem.emit(postToDelete);
    };
    return SiblingPostsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "buzz_siblings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "buzz_message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "user_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "sp_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "sp_selectedItem", void 0);
SiblingPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sibling-posts',
        template: __webpack_require__("../../../../../src/app/sibling-posts/sibling-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sibling-posts/sibling-posts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], SiblingPostsComponent);

var _a;
//# sourceMappingURL=sibling-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"side\">\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <div class=\"dropdown\" style=\"float: right; display:none\">\n      <button class=\"btn btn-default dropdown-toggle\" style=\"float: right; margin-bottom: 10px\" type=\"button\" data-toggle=\"dropdown\">{{sm_moduleName}}\n        <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\">\n        <li class=\"dropdown-header\">Your Modules</li>\n        <li><a href=\"#\">{{sm_moduleName}}</a></li>\n        <!--<li class=\"divider\"></li>-->\n        <!--<li class=\"dropdown-header\">Dropdown header 2</li>-->\n        <!--<li><a href=\"#\">About Us</a></li>-->\n      </ul>\n    </div>\n    <h3 class=\"panel-title\">Menu</h3>\n  </div>\n  <div class=\"panel-body\" style=\"font-size: 12px; width:260px; height:90%; overflow-y:scroll; color: #333\">\n    <div id=\"div_newThread\" style=\"display: none\">\n      Module: <input type=\"text\" value=\"{{sm_moduleName}}\" disabled>\n      P_ID: <input type=\"text\" value=\"{{sm_parentID}}\" disabled><br>\n      Heading :<input type=\"text\" placeholder=\"heading\" [(ngModel)]=\"sm_heading\">\n      Content :<input type=\"text\" placeholder=\"content\" [(ngModel)]=\"sm_content\">\n      <br>\n      <p>{{sm_heading}}</p>\n      <br>\n      <p>{{sm_content}}</p>\n      <br>\n      <button (click)=\"sm_createThread()\" onclick=\"document.getElementById('div_newThread').style.display = 'none' \"> Create Thread</button>\n\n    </div>\n\n\n    <div *ngIf=\"postOffice\">\n    <!--{{postOffice.supers | json}}-->\n    </div>\n    <br>\n    <div *ngIf=\"postOffice.supers\">\n    {{postOffice.supers.supers | json}}\n    </div>\n\n\n      <div  *ngFor=\"let p1 of sm_Posts\" style=\"padding-left: +0px\"  >\n          <div >\n            <button onclick=\"$(this).parent().children().toggle(); $(this).show()\" type=\"button\" nglButton=\"destructive\" style=\" margin-top: 15px; width: 90%\" (click)=\" selectedItem(p1.postID)\">{{p1.heading}}</button>\n\n            <!--<div  *ngFor=\"let s1 of postOffice.supers\" style=\"display: none\">-->\n              <!--<div  *ngFor=\"let p2 of s1.child_list\" style=\"display: none\">-->\n                    <!--<button style=\"\" type=\"button\" nglButton=\"neutral\" style=\" margin-top: 5px;margin-left: +18px; height: 30px \" (click)=\"selectedItem(p2.postID)\">{{p2.heading}}</button>-->\n              <!--</div>-->\n            <!--</div>-->\n\n          <!--<button nglButton=\"neutral\"  onclick=\"document.getElementById('div_newThread').style.display = 'inline' \" style=\"display: none\" (click)=\"sm_moduleName = p1.course_code; sm_parentID = p1._id\">Create New Thread</button>-->\n          </div>\n      </div>\n    <!--</div>-->\n    <div>\n      <!--<md-button class=\"md-raised md-primary\">Primary</md-button>-->\n      <!--<mui-button>CLick Me</mui-button>-->\n      <!--<button >Add a new module</button>-->\n      <br>\n      <hr>\n      <button type=\"button\" nglButton=\"success\" onclick=\"document.getElementById('txt2').style.display = 'none'; document.getElementById('div_main').style.display = 'inline'; document.getElementById('txt1').style.display = 'inline';\">Create Thread</button>\n    </div>\n  </div>\n</div>\n\n<style>\n  .divNaviItem:hover{\n    color: blue;\n    cursor: pointer;\n  }\n\n  #divNavi{\n    /*background-color: #bbb;*/\n    font-size: 14px;\n  }\n\n  .badge {\n    font-size: 8px;\n    background-color: black;\n  }\n\n  .divModule{\n    background-color: #999;\n    color: #EEE;\n    font-size: 20px;\n    padding-left: 10px;\n  }\n\n  .folder{\n    color: sandybrown;\n  }\n\n  .buttondemoBasicUsage section {\n    background: #f7f7f7;\n    border-radius: 3px;\n    text-align: center;\n    margin: 1em;\n    position: relative !important;\n    padding-bottom: 10px; }\n\n  .buttondemoBasicUsage md-content {\n    margin-right: 7px; }\n\n  .buttondemoBasicUsage section .md-button {\n    margin-top: 16px;\n    margin-bottom: 16px; }\n\n  .buttondemoBasicUsage .label {\n    position: absolute;\n    bottom: 5px;\n    left: 7px;\n    font-size: 14px;\n    opacity: 0.54; }\n</style>\n\n"

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__("../../../../../src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = (function () {
    function SideMenuComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.selectedMenuItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.loadedFirst = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.sm_moduleName = 'COS101';
        this.sm_content = 'A';
        this.sm_heading = 'A';
    }
    SideMenuComponent.prototype.ngOnInit = function () {
        this.loadedFirst.emit();
        // this.getPosts();
    };
    SideMenuComponent.prototype.sm_createThread = function () {
        console.log("We Here1");
        this.newPost = new __WEBPACK_IMPORTED_MODULE_2__post__["a" /* Post */](this.sm_heading, 1, [], [], this.sm_parentID, this.sm_content, this.sm_moduleName, "15110045", new Date(Date.now()), true);
        console.log(this.sm_heading + "," + this.sm_parentID + this.sm_content + this.sm_content);
        //this.creatingNewThread.emit(this.newPost);
        // this._mediatorService.createPost(this.newPost)
        //     .then(status => this.idk())
        //     .catch(err => console.log(err));
    };
    SideMenuComponent.prototype.idk = function () {
    };
    SideMenuComponent.prototype.selectedItem = function (choosenId) {
        this.selectedMenuItem.emit(choosenId);
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "postOffice", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "sm_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "selectedMenuItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "loadedFirst", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-side-menu',
        template: __webpack_require__("../../../../../src/app/side-menu/side-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/side-menu/side-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], SideMenuComponent);

var _a;
//# sourceMappingURL=side-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"stat\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Forum Activity</h3>\n  </div>\n  <div class=\"panel-body\">\n    Panel content\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/status-bar/status-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from '../cpu';
var StatusBarComponent = (function () {
    function StatusBarComponent() {
    }
    StatusBarComponent.prototype.ngOnInit = function () {
    };
    return StatusBarComponent;
}());
StatusBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-status-bar',
        template: __webpack_require__("../../../../../src/app/status-bar/status-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/status-bar/status-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StatusBarComponent);

//# sourceMappingURL=status-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/subs-list/subs-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subs-list/subs-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"subs\" >\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <h3 class=\"panel-title\">Subscription List</h3>\n  </div>\n  <div class=\"panel-body\" >\n    Panel content\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/subs-list/subs-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {CPU} from '../cpu';
var SubsListComponent = (function () {
    function SubsListComponent() {
    }
    SubsListComponent.prototype.ngOnInit = function () {
    };
    return SubsListComponent;
}());
SubsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-subs-list',
        template: __webpack_require__("../../../../../src/app/subs-list/subs-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subs-list/subs-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubsListComponent);

//# sourceMappingURL=subs-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/super-post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperPost; });
var SuperPost = (function () {
    function SuperPost(child_list, supers, _mediatorService, w) {
        if (child_list === void 0) { child_list = []; }
        if (supers === void 0) { supers = []; }
        if (w === void 0) { w = []; }
        this.child_list = child_list;
        this.supers = supers;
        this._mediatorService = _mediatorService;
        this.w = w;
    }
    SuperPost.prototype.populate = function (x_list, v) {
        // if (v == 2)
        // {
        //     return ;
        // }
        // this.child_list = [];
        // this.supers = [];
        // for (var i = 0; i < x_list.length; i++)
        // {
        //     this.child_list.push(x_list[i]);
        //     this.supers.push(new SuperPost([],[],this._mediatorService));
        //     {
        //         // ;
        //         // let w : Post[] = new Array<Post>();
        //         console.log("P Called: "+ x_list[i].postID);
        //         this._mediatorService.getChildPosts("59a2c68c1ec68404e0615038")
        //             .then(w => w = w)
        //             .catch(err => console.log(err));
        //         ;
        //         if (this.w != null)
        //         console.log("W: "+JSON.stringify(this.w));
        //         console.log("W: "+this.w);
        //
        //         if (this.w != null && this.w.length > 0)
        //         {
        //             this.supers[i].populate(this.w, v++);
        //             console.log("Populate Clled");
        //         }
        //     }
        // }
    };
    return SuperPost;
}());

//# sourceMappingURL=super-post.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
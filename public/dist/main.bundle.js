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

/***/ "../../../../../src/app/admininterface/admininterface.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admininterface/admininterface.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Buzz Admin\" [(visible)]=\"display\" modal=\"modal\" width=\"900\" height=\"600\">\n  <ul class=\"nav nav-tabs\">\n    <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Home</a></li>\n    <li class=\"hideme\" ><a data-toggle=\"tab\"  href=\"#ad_mileStones\">MileStones</a></li>\n    <li><a data-toggle=\"tab\" href=\"#ad_viewStats\">Statistics</a></li>\n  </ul>\n\n  <div class=\"tab-content\">\n    <div id=\"home\" class=\"tab-pane fade in active\">\n      <h3>HOME</h3>\n      <p>Some content.</p>\n      ad_allUsers:\n      {{ ad_allUsers | json }}\n      admin_Obj:\n      {{ admin_Obj | json }}\n    </div>\n    <div id=\"ad_mileStones\" class=\"tab-pane fade\">\n      <div> Current MileStones:\n        <table class=\"table table-hover\">\n          <thead>\n          <tr>\n            <th>Gengre</th>\n            <th>Goal</th>\n            <th>Reaward</th>\n            <th>Expiration</th>\n            <th>Completed</th>\n          </tr>\n          </thead>\n          <!--*ngFor=\"let p of rp_Posts\"-->\n          <!--<tr *ngFor=\"let p of sp_Posts\" (click)=\"selectedSibling(p.postID,p.heading, p.level)\">-->\n          <tr *ngFor=\"\" >\n            <td>X</td>\n            <td>X</td>\n            <td>X</td>\n          </tr>\n          <tr *ngIf=\"\">\n            <td>No responses to current message</td>\n          </tr>\n        </table>\n      </div>\n      <div class=\"alert alert-info\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        Genre: <strong>LIKES!</strong>\n        Goal: <strong>40</strong>\n        Reward: <strong>20</strong>\n      </div>\n      <div class=\"alert alert-info\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>\n        Genre: <strong>LIKES!</strong>\n        Goal: <strong>40</strong>\n        Reward: <strong>20</strong>\n      </div>\n      <div class=\"form-group\" style=\"; display: inline-block;\">\n        <label for=\"sel1\">Type of MileStone: </label>\n        <select class=\"form-control\" id=\"sel1\" style=\"width: 100px\">\n          <option>Likes</option>\n          <option>Replies</option>\n          <option>Groups</option>\n        </select>\n      </div>\n      <div style=\"margin-left: 30px; display: inline-block;\">\n        <label for=\"sel1\">Goal: </label>\n        <input type=\"number\" style=\"width: 100px\" class=\"form-control\" min=\"0\" max=\"1000\">\n      </div>\n      <div style=\"margin-left: 30px; display: inline-block;\">\n        <label for=\"sel1\">Reward Amount: </label>\n        <input type=\"number\" class=\"form-control\" style=\"width: 100px\" min=\"0\" max=\"1000\">\n      </div>\n      <div style=\"margin-left: 30px; display: inline-block;\">\n        <label for=\"sel1\">Expiration Date: </label>\n        <input type=\"date\" class=\"form-control\" style=\"width: 300px\" min=\"0\" max=\"1000\">\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label\">Reward :</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">Details</span>\n          <input type=\"text\" class=\"form-control\">\n        </div>\n        <br>\n        <button class=\"btn btn-info\">CREATE MILESTONE</button>\n      </div>\n    </div>\n    <div id=\"ad_viewStats\" class=\"tab-pane fade\" >\n      <br>\n      <label for=\"sel1\">Module: </label>\n      <select class=\"form-control\" [(ngModel)]=\"admin_selected_module\">\n        <!--<option *ngIf=\"p1.status == 'lect'\">{{p1.courseCode}}</option>-->\n        <option *ngFor=\"let p1 of admin_Obj\" >{{p1.courseCode}}</option>\n      </select>\n      <br>\n      <br>\n      <div style=\"background-color: black; color: white\">\n        <label *ngFor=\"let p1 of ad_dataOptions\" style=\"margin-left: 20px\">\n          <input type=\"checkbox\" [(ngModel)]=\"p1.view\" value=\"p1.view\"  style=\"width: 20px\">{{p1.option_name}}\n        </label>\n      </div>\n      <br>\n      <br>\n      <br>\n      <button type=\"button\" nglButton=\"neutral\" (click)=\"hideName = !hideName\" class=\"slds-m-bottom--large\">Toggle \"Name\" column</button>\n      <button type=\"button\" nglButton=\"neutral\" (click)=\"loading = !loading\" class=\"slds-m-bottom--large\">Toggle Loading</button>\n      <button type=\"button\" nglButton=\"neutral\" (click)=\"toggleData()\" class=\"slds-m-bottom--large\">Clear/Set data</button>\n\n      <table ngl-datatable [data]=\"data\" trackByKey=\"rank\" [loading]=\"loading\" [(sort)]=\"sort\" (sortChange)=\"onSort($event)\"\n             (onRowClick)=\"onRowClick($event)\" class=\"slds-max-medium-table--stacked-horizontal\">\n        <!--<ngl-datatable-column heading=\"Rank\" key=\"rank\" sortable></ngl-datatable-column>-->\n      <div *ngFor=\"let adOp of ad_dataOptions\">\n        <ngl-datatable-column heading=\"{{adOp.option_name}}\" key=\"{{adOp.option_name}}\" *ngIf=\"adOp.view\" cellClass=\"slds-truncate\" sortable></ngl-datatable-column>\n      </div>\n        <ng-template nglLoadingOverlay>\n          <div class=\"slds-box slds-box--small slds-theme--shade slds-text-align--center\">Loading...</div>\n        </ng-template>\n\n        <ng-template nglNoRowsOverlay>No data available in table!</ng-template>\n      </table>\n    </div>\n  </div>\n  <!--<div class=\"btn-group-vertical\" style=\"width: 300px; height: 500px; border: 1px solid #DDD; display: inline-block\" onclick=\"\">-->\n    <!--<a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(1)\">MileStones</a>-->\n    <!--<a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(2)\">View Stats</a>-->\n  <!--</div>-->\n  <!--<div class=\"panel panel-info\" style=\"width: 550px; height: 500px; border: 1px solid black; display: inline-block; position: absolute; right: 10px\">-->\n    <!--<div class=\"panel-heading\">-->\n      <!--<h3 class=\"panel-title\">{{panel_heading}}</h3>-->\n    <!--</div>-->\n    <!--<div class=\"panel-body\" style=\"overflow-y:scroll; height: 90%\">-->\n      <!--&lt;!&ndash;{{userObject | json}}&ndash;&gt;-->\n\n\n\n  <!--</div>-->\n  <!--</div>-->\n</p-dialog>\n\n\n<button type=\"text\" id=\"ad_trigger\" (click)=\"showDialog()\" icon=\"fa-external-link-square\" label=\"Show\" style=\"display:none\">Show</button>"

/***/ }),

/***/ "../../../../../src/app/admininterface/admininterface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmininterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kontroller_service__ = __webpack_require__("../../../../../src/app/kontroller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdmininterfaceComponent = (function () {
    function AdmininterfaceComponent(_kontrolService) {
        this._kontrolService = _kontrolService;
        this.display = false;
        this.admin_Obj = [];
        this.admin_selected_module = "";
        this.ad_allUsers = [];
        this.panel_heading = "Mile Stones";
        this.createMileStone = { milestoneName: "", description: "", reward: 0 };
        //STARS
        this.value = 3;
        this.readonly = false;
        this.size = 'small';
        this.color = '#FFB75D';
        //TABLE
        this.ad_dataOptions = [
            { option_name: 'number', view: true },
            { option_name: 'surname', view: true },
            { option_name: 'likes', view: true },
            { option_name: 'dislikes', view: true },
            { option_name: 'responses', view: true },
            { option_name: 'bounty', view: true },
            { option_name: 'milestones', view: true }
        ];
        this.DATA = [
            { rank: 1, number: 'u12345678', surname: 'Abdul-Jabbar', likes: '38387', dislikes: 23, responses: 23, bounty: 12, milestones: 12 },
            { rank: 2, number: 'u23135463', surname: 'Malone', likes: '36928', dislikes: 12, responses: 23, bounty: 12, milestones: 12 },
            { rank: 3, number: 'u25746269', surname: 'Bryant', likes: '33643', dislikes: 16, responses: 12, bounty: 12, milestones: 12 },
            { rank: 4, number: 'u16452235', surname: 'Jordan', likes: '32292', dislikes: 54, responses: 12, bounty: 12, milestones: 12 },
            { rank: 5, number: 'u34254543', surname: 'Chamberlain', likes: '31419', dislikes: 10, responses: 12, bounty: 12, milestones: 12 },
        ];
        this.data = this.DATA;
        // Initial sort
        this.sort = { key: 'rank', order: 'asc' };
        // Show loading overlay
        this.loading = false;
        // Toggle name column
        this.hideName = false;
    }
    AdmininterfaceComponent.prototype.showDialog = function () {
        this.display = true;
    };
    AdmininterfaceComponent.prototype.getReports = function (x) {
        switch (x) {
            case 1:
                this.panel_heading = 'Mile Stones';
                document.getElementById("ad_mileStones").style.display = "block";
                document.getElementById("ad_viewStats").style.display = "none";
                break;
            case 2:
                this.panel_heading = 'Admin Stats';
                document.getElementById("ad_viewStats").style.display = "block";
                document.getElementById("ad_mileStones").style.display = "none";
                break;
        }
    };
    AdmininterfaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.refresh_myAdmin();
        }, 6000);
    };
    AdmininterfaceComponent.prototype.refresh_myAdmin = function () {
        if (this.display == true && sessionStorage.getItem("sessionID")) {
            this.ad_get_adminModules();
            // this.rep_gami_stats();
        }
        if (!sessionStorage.getItem("sessionID")) {
            // this.repo_stats = null;
            this.display = false;
        }
    };
    AdmininterfaceComponent.prototype.ad_get_adminModules = function () {
        var _this = this;
        this._kontrolService.getUserStatus(sessionStorage.getItem("sessionID"))
            .then(function (admin_Obj) {
            _this.admin_Obj = admin_Obj;
            _this.ad_get_users();
        })
            .catch(function (err) { return console.log(err); });
    };
    AdmininterfaceComponent.prototype.ad_get_users = function () {
        var _this = this;
        if (this.admin_selected_module != "") {
            this._kontrolService.studentsInModule(this.admin_selected_module)
                .then(function (ad_allUsers) { _this.ad_allUsers = ad_allUsers; _this.reflect_users(); })
                .catch(function (err) { return console.log(err); });
        }
    };
    AdmininterfaceComponent.prototype.reflect_users = function () {
        if (this.ad_allUsers.length > this.DATA.length) {
            for (; this.ad_allUsers.length > this.DATA.length;) {
                this.DATA.push({ rank: 0, number: '0', surname: '0', likes: '0', dislikes: 0, responses: 0, bounty: 0, milestones: 0 });
            }
            for (var i = 0; i < this.DATA.length; i++) {
                this.DATA[i].number = this.ad_allUsers[i].userID;
            }
        }
        this.data = this.DATA;
    };
    // Custom sort function
    AdmininterfaceComponent.prototype.onSort = function ($event) {
        var key = $event.key, order = $event.order;
        this.data.sort(function (a, b) {
            return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
        });
    };
    AdmininterfaceComponent.prototype.toggleData = function () {
        this.data = this.data ? null : this.DATA;
    };
    AdmininterfaceComponent.prototype.onRowClick = function ($event) {
        console.log('clicked row', $event.data);
    };
    return AdmininterfaceComponent;
}());
AdmininterfaceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admininterface',
        template: __webpack_require__("../../../../../src/app/admininterface/admininterface.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admininterface/admininterface.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__kontroller_service__["a" /* KontrollerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kontroller_service__["a" /* KontrollerService */]) === "function" && _a || Object])
], AdmininterfaceComponent);

var _a;
//# sourceMappingURL=admininterface.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label{\n    colour: white\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<button style=\"position: fixed; height: 300px\" (click)=\"dummyData()\">PopulateDummies</button>-->\n<app-nav-bar [nb_comp_ids]=\"nb_comp_ids\" [nav_crums]=\"nav_crums\" [userObject]=\"userObject\" (shift_timer)=\"timer_Shifted($event)\" (clicked_crumb)=\"setMessage2($event.postId, $event.heading, $event.level)\" (view_profile)=\"toProfile()\" (logout_emit)=\"logOut()\" (nb_restToDash)=\"restToDash($event)\"></app-nav-bar>\n<app-reports [userObject]=\"userObject\" [sm_moduleName]=\"sm_moduleName\"></app-reports>\n<app-groups [userObject]=\"userObject\"></app-groups>\n<app-admininterface ></app-admininterface>\n<app-login id=\"id_login\" [user_Id]=\"user_Id\" [user_password]=\"user_password\" (refreshedPage)=\"dashBored()\" [responseDialog]=\"responseDialog\" (authenticate_User)=\"login_Attempt($event.usrId, $event.usrPs)\"></app-login>\n<!--<div id=\"id_dashboard\">-->\n<div id=\"id_dashboard\" style=\"display: none\">\n    <app-side-menu [sm_Posts]=\"sm_Posts\" [sm_moduleName]=\"sm_moduleName\" [userObject]=\"userObject\" (selecetedModule)=\"switchModules($event)\" (selectedMenuItem)=\"setSibs($event.postId, $event.heading)\"></app-side-menu>\n    <app-recent-posts [rp_Posts]=\"rp_Posts\" (rp_selectedItem)=\"this.nav_crums = [];setMessage2($event.postId, $event.heading, $event.level)\" (rp_addToNav)=\"addToNav($event)\"></app-recent-posts>\n    <app-messages [mess_Post]=\"mess_Post\" [upVotes]=\"upVotes\" [downVotes]=\"downVotes\" (mess_post_liked)=\"likedPost()\" (mess_post_disliked)=\"dislikedPost()\" (mess_addToNav)=\"addToNav($event)\"></app-messages>\n    <app-sibling-posts [sp_Posts]=\"sp_Posts\" (sp_selectedItem)=\"setMessage($event.postId, $event.heading, $event.level)\" (sp_addToNav)=\"addToNav($event)\"></app-sibling-posts>\n    <app-comments [co_Posts]=\"co_Posts\" (co_selectedItem)=\"setMessage2($event.postId, $event.heading, $event.level)\" (co_addToNav)=\"addToNav($event)\"></app-comments>\n</div>\n\n\n<!--<div ondragover=\"drag_over(event)\" ondrop=\"drop(event)\">\n    <div id=\"div_main\" style=\"height:100vh; width:100%; border:3px solid white; top:0px; left:0px; position: absolute; display:none\">\n        <!--<div id=\"\" style=\"height:100vh; width:100%; border:3px solid white; background-color:#000; opacity: 0.4; top:0px; left:0px; position: absolute; display:none\">\n        </div>-->\n<!--<div id=\"txt1\" draggable=\"true\" ondragstart=\"drag_start(event)\" style=\"opacity:1.0; height: 300px; color: white\">\n    <div class=\"div_dance_header\" style=\"opacity:1.0\">\n        <button type=\"button\" class=\"cancel_dance\" style=\"color:black; opacity:1.0\" onclick=\"document.getElementById('div_main').style.display = 'none'\">&times;</button>\n        <h3>Create Thread</h3>\n    </div>\n    <br>\n    <br>\n    <div class=\"form-group\">\n        <label >Course Code:</label><button type=\"button\" class=\"btn btn-warning\" style=\"float:right\" (click)=\"createThread()\" onclick=\"document.getElementById('div_main').style.display = 'none'\">Create Thread</button>\n        <input type=\"text\" value=\"{{sm_moduleName}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"sm_moduleName\" disabled>\n    </div>\n    <div class=\"form-group\">\n        <label >Enter Heading: </label>\n        <input type=\"text\" value=\"{{newHeading}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"newHeading\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"comment\">Thread Message Content:</label>\n        <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]=\"newContent\"></textarea>\n    </div>\n    <br>\n</div>-->\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModalHorizontal\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" style=\"vertical-align: middle\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\"\n                        data-dismiss=\"modal\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n                <h3 class=\"modal-title\" id=\"myModalLabel\">Create Thread</h3>\n            </div>\n\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label >Course Code:</label>\n                    <input type=\"text\" value=\"{{sm_moduleName}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"sm_moduleName\" disabled>\n                </div>\n                <div class=\"form-group\">\n                    <label >Post Heading: </label>\n                    <input type=\"text\" value=\"{{newHeading}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"newHeading\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"comment\">Message Content:</label>\n                    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newContent\"></textarea>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" id=\"xoxo2\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" onclick=\"$('#xoxo2').click()\" class=\"btn btn-primary\" (click)=\"createThread()\">Post</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModalHorizontal2\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" style=\"vertical-align: middle\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\"\n                        data-dismiss=\"modal\">\n                    <span aria-hidden=\"true\">&times;</span>\n                    <span class=\"sr-only\">Close</span>\n                </button>\n                <h3 class=\"modal-title\" id=\"myModalLabel\">Create Response</h3>\n            </div>\n\n            <div class=\"modal-body\">\n                <div class=\"form-group\">\n                    <label >Course Code:</label>\n                    <input type=\"text\" value=\"{{sm_moduleName}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"sm_moduleName\" disabled>\n                </div>\n                <div class=\"form-group\">\n                    <label >Response Heading: </label>\n                    <input type=\"text\" value=\"{{newHeading}}\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"newHeading\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"comment\">Message Content:</label>\n                    <textarea class=\"form-control\" rows=\"5\" [(ngModel)]=\"newContent\"></textarea>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" id=\"xoxo\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" onclick=\"$('#xoxo').click()\" class=\"btn btn-primary\" (click)=\"createRespond()\">Post</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<style>\n    .div_dance_header{\n        width: 100%;\n        height: 30px;\n        opacity: 1.0;\n        background-color: black;\n        color: white;\n        /*            font-size: 50px;*/\n\n    }\n\n    .cancel_dance{\n        float: right;\n    }\n\n\n\n    .div_dance_message{\n        width: 94%;\n        background-color: white;\n        height: 200px;\n        margin-left: 20px;\n        margin-top: 30px;\n    }\n\n    #txt1{\n        width:600px;\n        height: 690px;\n        background-color:#777;\n        position:absolute;\n        border-radius: 20px;\n        border: 3px solid green;\n    }\n\n    #txt2{\n        width:600px;\n        height: 580px;\n        background-color:#777;\n        position:absolute;\n        border-radius: 20px;\n        border: 3px solid green;\n    }\n\n    #txt1, #txt2 .glyphicon:hover{\n        color: green;\n    }\n</style>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Recent click
var AppComponent = (function () {
    function AppComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.title = 'Buzz';
        this.display = false;
        // showDialog() {
        //     this.display = true;
        // }
        this.user_Id = '';
        this.user_password = '';
        this.sm_moduleName = '';
        //Remember COS101 is not integrated yet to other components
        this.app_module = '';
        this.app_content = '';
        this.user_bounty = 321;
        this.user_points = 1245;
        this.userObject = [];
        this.sm_Posts = [];
        this.sp_Posts = [];
        this.rp_Posts = [];
        this.mess_Post = null;
        this.co_Posts = [];
        this.idForMe = "";
        this.responseDialog = [];
        this.tags = [];
        this.nav_crums = [];
        this.newContent = '';
        this.newHeading = '';
        this.upVotes = 0;
        this.downVotes = 0;
        this.nb_comp_ids = [];
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', "XXXX"],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
    AppComponent.prototype.createNewModule = function () {
    };
    AppComponent.prototype.login_Attempt = function (usrId, usrPswrd) {
        // console.log("userId:"+usrId+"UserPsswrd: "+usrPswrd);
        var _this = this;
        this._mediatorService.getUser(usrId)
            .then(function (userObject) { _this.userObject = userObject; _this.authenticatePassword(); })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.authenticatePassword = function () {
        if (this.userObject.length == 0) {
            this.responseDialog.pop();
            this.responseDialog.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
        }
        else {
            this.user_Id = this.userObject[0].userID;
            sessionStorage.setItem("sessionID", this.user_Id);
            this.responseDialog.pop();
            this.dashBored();
        }
    };
    AppComponent.prototype.logOut = function () {
        this.userObject = [];
        this.user_Id = "";
        sessionStorage.removeItem("sessionID");
        console.log('sessionId after log out' + sessionStorage.getItem("sessionID"));
        this.sm_moduleName = "";
        this.resetTextFields();
        this.dashBored();
    };
    AppComponent.prototype.refresh_dashboard = function () {
        if (sessionStorage.getItem("sessionID")) {
            this.getAllPosts(this.sm_moduleName);
            this.setRecentPosts(this.sm_moduleName);
        }
        if (this.idForMe != "" && sessionStorage.getItem("sessionID")) {
            this.x_setSibs(this.idForMe);
            this.setResponses(this.idForMe);
            this.loadUpVotes(this.idForMe);
            this.loadDownVotes(this.idForMe);
        }
    };
    AppComponent.prototype.timer_Shifted = function (i) {
        // if (i == 1)
        //     group_timer;
    };
    AppComponent.prototype.dashBored = function () {
        var _this = this;
        if (sessionStorage.getItem("sessionID")) {
            // alert("LOGGED IN as: "+sessionStorage.getItem("sessionID"))
            this._mediatorService.getUser(sessionStorage.getItem("sessionID"))
                .then(function (userObject) { _this.userObject = userObject; _this.toDashBoard(); })
                .catch(function (err) { return console.log(err); });
        }
        else {
            document.getElementById('id_dashboard').style.display = 'none';
            document.getElementById('div_breadCrums').style.display = 'none';
            document.getElementById('id_login').style.display = 'inline';
        }
    };
    AppComponent.prototype.toDashBoard = function () {
        var _this = this;
        if (this.userObject.length > 0) {
            if (this.sm_moduleName == "" && this.userObject && this.userObject.length > 0)
                this.sm_moduleName = this.userObject[0].modules[0];
            this.dashboard_timer = setInterval(function () {
                _this.refresh_dashboard();
            }, 7000);
        }
        else
            return;
        this.getAllPosts(this.sm_moduleName);
        document.getElementById('id_dashboard').style.display = 'inline';
        // document.getElementById('div_breadCrums').style.display = 'inline';
        document.getElementById('id_login').style.display = 'none';
        this.user_Id = sessionStorage.getItem("sessionID");
    };
    AppComponent.prototype.toProfile = function () {
    };
    AppComponent.prototype.getAllPosts = function (x) {
        //XOXO
        var _this = this;
        this._mediatorService.getLevelZeros(x)
            .then(function (sm_Posts) { return _this.sm_Posts = sm_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.switchModules = function (p) {
        this.idForMe = "";
        this.mess_Post = null;
        this.sm_moduleName = p;
        this.resetTextFields();
        this.getAllPosts(p);
    };
    AppComponent.prototype.resetTextFields = function () {
        for (var i = 0; 0 < this.sm_Posts.length; i++)
            this.sm_Posts.pop();
        for (var i = 0; 0 < this.co_Posts.length; i++)
            this.co_Posts.pop();
        for (var i = 0; 0 < this.sp_Posts.length; i++)
            this.sp_Posts.pop();
        for (var i = 0; 0 < this.rp_Posts.length; i++)
            this.rp_Posts.pop();
        // for (let i =0; 0 < this.nav_crums.length; i++)
        //     this.nav_crums.pop();
        this.idForMe = "";
        this.mess_Post = null;
    };
    AppComponent.prototype.populatePostOffice = function (x, x_list, v) {
    };
    AppComponent.prototype.setSibs = function (choosenId, pHeading) {
        // this.nav_crums = [];
        // this.nav_crums.push({heading: pHeading,postId: choosenId});
        this.x_setSibs(choosenId);
        this.x_setMessage(choosenId);
    };
    AppComponent.prototype.x_setSibs = function (choosenId) {
        var _this = this;
        // this.sp_Posts = [];
        this._mediatorService.getSiblingPosts(choosenId, sessionStorage.getItem("sessionID"))
            .then(function (sp_Posts) { return _this.sp_Posts = sp_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.setMessage = function (choosenId, heading, level) {
        // for( ; level < this.nav_crums.length; )
        //     this.nav_crums.pop();
        // this.nav_crums.splice(level, this.nav_crums.length - level)
        // this.nav_crums.push({heading: heading,postId: choosenId});
        this.x_setMessage(choosenId);
    };
    AppComponent.prototype.noChildrenLevelZero = function (x) {
        var _this = this;
        this._mediatorService.getLevelZeros(x)
            .then(function (sp_Posts) { return _this.sp_Posts = sp_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.x_setMessage = function (choosenId) {
        var _this = this;
        this.idForMe = choosenId;
        this._mediatorService.getContent(choosenId)
            .then(function (mess_Post) { return _this.mess_Post = mess_Post; })
            .catch(function (err) { return console.log(err); });
        this.setResponses(choosenId);
        this.loadUpVotes(choosenId);
        this.loadDownVotes(choosenId);
    };
    AppComponent.prototype.setMessage2 = function (choosenId, heading, level) {
        // for (let i =0; 0 < this.sp_Posts.length; i++)
        //     this.sp_Posts.pop();
        this.setMessage(choosenId, heading, level);
        this.x_setSibs(choosenId);
    };
    AppComponent.prototype.setResponses = function (choosenId) {
        var _this = this;
        this._mediatorService.getChildPosts(choosenId, sessionStorage.getItem("sessionID"))
            .then(function (co_Posts) { return _this.co_Posts = co_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.setRecentPosts = function (moduCode) {
        var _this = this;
        this._mediatorService.getRecentPosts(this.sm_moduleName)
            .then(function (rp_Posts) { return _this.rp_Posts = rp_Posts; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.createRespond = function () {
        var _this = this;
        this.newPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */](this.newHeading, 0, [], this.tags, this.idForMe, this.newContent, this.sm_moduleName, sessionStorage.getItem("sessionID"), null, true, '');
        this._mediatorService.createResponce(this.idForMe, this.newPost)
            .then(function (status) { _this.setResponses(_this.idForMe); })
            .catch(function (err) { return console.log(err); });
        this.newHeading = "";
        this.newContent = "";
    };
    AppComponent.prototype.createThread = function () {
        var _this = this;
        this.newPost = new __WEBPACK_IMPORTED_MODULE_1__post__["a" /* Post */](this.newHeading, 0, [], this.tags, null, this.newContent, this.sm_moduleName, sessionStorage.getItem("sessionID"), null, true, '');
        this._mediatorService.createThread('xoxoxo', this.newPost)
            .then(function (status) { _this.getAllPosts(_this.sm_moduleName); })
            .catch(function (err) { return console.log(err); });
        this.newHeading = "";
        this.newContent = "";
    };
    AppComponent.prototype.restToDash = function (comp_desc) {
        var i = this.nb_comp_ids.indexOf(comp_desc);
        this.nb_comp_ids.splice(i, 1);
    };
    AppComponent.prototype.addToNav = function (comp_id) {
        this.nb_comp_ids.push(comp_id);
        if (comp_id === "mess") {
            document.getElementById('comments').style.top = '10%';
            document.getElementById('comments').style.top = '90%';
        }
        if (comp_id === "comments") {
            document.getElementById('message').style.top = '10%';
            document.getElementById('comments').style.top = '90%';
        }
    };
    AppComponent.prototype.likedPost = function () {
        var _this = this;
        var myObj = { postID: this.idForMe, student_number: this.user_Id };
        this._mediatorService.upVote('xoxoxo', myObj)
            .then(function (status) { _this.loadUpVotes(_this.idForMe); })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.dislikedPost = function () {
        var _this = this;
        var myObj = { postID: this.idForMe, student_number: this.user_Id };
        this._mediatorService.downVote('xoxoxo', myObj)
            .then(function (status) { _this.loadDownVotes(_this.idForMe); })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.loadUpVotes = function (x) {
        var _this = this;
        this._mediatorService.getUpVotes(x)
            .then(function (upVotes) { return _this.upVotes = upVotes; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.loadDownVotes = function (x) {
        var _this = this;
        this._mediatorService.getDownVotes(x)
            .then(function (downVotes) { return _this.downVotes = downVotes; })
            .catch(function (err) { return console.log(err); });
    };
    AppComponent.prototype.dummyData = function () {
        this.mess_Post = { heading: "A", module: "A", content: "a", mess_Post: new Date().getTime() };
        this.userObject = [{ "_id": "59bac4d6d3ab7929b4f74f68", "userID": "u15478012", "title": "Mr", "initials": "HLP", "surname": "Trunks", "email": "that@tings.com", "pseodoname": "Brody", "modules": ["COS 555", "COS 333", "COS 777", "COS 000"] }];
        this.sm_Posts = [{ "heading": "DEMO Day", "postID": "59cbb33bde7ad10d006ac41b", "level": 0 }, { "heading": "Suggestions", "postID": "59cba78ade7ad10d006ac414", "level": 0 }, { "heading": "Trail run", "postID": "59ca3bbc1c462b0021168baa", "level": 0 }, { "heading": "u15478012_Thread", "postID": "59ca1c1657036a2700120618", "level": 0 }, { "heading": "LDAP", "postID": "59c92fa07ca8ef0021893334", "level": 0 }, { "heading": "Buzz UI", "postID": "59c92e177ca8ef002189332f", "level": 0 }, { "heading": "DS", "postID": "59acfc445b6f332c1cdc2c5b", "level": 0 }, { "heading": "AA", "postID": "59ac916c4cf3281a000a9dcc", "level": 0 }, { "heading": "Fitchfork", "postID": "599fc7c9ae6ed2154805987e", "level": 0 }, { "heading": "Practical Assignments", "postID": "599fc7c9ae6ed2154805987d", "level": 0 }];
        this.sp_Posts = [{ "heading": "DEMO XXXXXXXXXXX", "postID": "59cbb33bde7ad10d006ac41b", "userID": "uXXXXXXXX", "timestamp": "2017-09-20T14:18:35.035Z" }, { "heading": "Suggestions", "postID": "59cba78ade7ad10d006ac414", "userID": "uXXXXXXXX", "timestamp": "2017-09-27T13:28:42.434Z" }, { "heading": "Trail run", "postID": "59ca3bbc1c462b0021168baa", "userID": "uXXXXXXXX", "timestamp": "2017-09-26T11:36:28.182Z" }, { "heading": "u15478012_Thread", "postID": "59ca1c1657036a2700120618", "userID": "uXXXXXXXX", "timestamp": "2017-09-26T09:21:26.368Z" }, { "heading": "LDAP", "postID": "59c92fa07ca8ef0021893334", "userID": "uXXXXXXXX", "timestamp": "2017-09-25T16:32:32.453Z" }, { "heading": "Buzz UI", "postID": "59c92e177ca8ef002189332f", "userID": "uXXXXXXXX", "timestamp": "2017-09-25T16:25:59.645Z" }, { "heading": "DS", "postID": "59acfc445b6f332c1cdc2c5b", "userID": "uXXXXXXXX", "timestamp": "2017-09-04T07:09:56.564Z" }, { "heading": "AA", "postID": "59ac916c4cf3281a000a9dcc", "userID": "uXXXXXXXX", "timestamp": "2017-09-03T23:34:04.516Z" }, { "heading": "Fitchfork", "postID": "599fc7c9ae6ed2154805987e", "userID": "a001", "timestamp": "2017-08-25T06:46:33.031Z" }, { "heading": "Practical Assignments", "postID": "599fc7c9ae6ed2154805987d", "userID": "a001", "timestamp": "2017-08-25T06:46:33.026Z" }];
        this.co_Posts = [{ "postID": "599fc7c9ae6ed215480598ad", "heading": "Getting 0", "level": 1 }, { "postID": "599fc7c9ae6ed215480598b0", "heading": "Minus 1", "level": 1 }, { "postID": "599fc7c9ae6ed215480598b3", "heading": "Not getting full marks", "level": 1 }, { "postID": "599fc7c9ae6ed215480598b6", "heading": "File too big", "level": 1 }, { "postID": "599fc7c9ae6ed215480598be", "heading": "Possible Solution to Fitchfork criteria?", "level": 1 }, { "postID": "599fc7c9ae6ed215480598bf", "heading": "Which attempt counts?", "level": 1 }, { "postID": "599fc7c9ae6ed215480598c6", "heading": "Deleting wrong uploaded tasks", "level": 1 }, { "postID": "599fc7c9ae6ed215480598c8", "heading": "Uploading Tasks", "level": 1 }, { "postID": "599fc7c9ae6ed215480598cb", "heading": "Fitchfork marks", "level": 1 }, { "postID": "599fc7c9ae6ed215480598d0", "heading": "Checking and correcting mistakes", "level": 1 }, { "postID": "599fc7c9ae6ed215480598d5", "heading": "Checking and correcting mistakes", "level": 1 }, { "postID": "599fc7c9ae6ed215480598da", "heading": "Fast but much too strict", "level": 1 }, { "postID": "599fc7c9ae6ed215480598e2", "heading": "From bad to worse", "level": 1 }, { "postID": "599fc7c9ae6ed215480598ec", "heading": "aploading prac2 task4", "level": 1 }, { "postID": "59d636bd6c99af715b231ce2", "heading": "Timeout Exception", "level": 1, "visibility": true }];
        this.rp_Posts = [{ "postID": "59cbb4a9de7ad10d006ac41e", "heading": "Security Aspect", "level": 1 }, { "postID": "59cbb44ede7ad10d006ac41d", "heading": "Chill Lounge", "level": 1 }, { "postID": "59cbb3fade7ad10d006ac41c", "heading": "Usability testing", "level": 1 }, { "postID": "59cbb33bde7ad10d006ac41b", "heading": "DEMO Day", "level": 0 }, { "postID": "59cbac40de7ad10d006ac41a", "heading": "Chat rooms", "level": 1 }];
        this.sm_moduleName = this.userObject[0].modules[0];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__kontroller_service__ = __webpack_require__("../../../../../src/app/kontroller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__status_bar_status_bar_component__ = __webpack_require__("../../../../../src/app/status-bar/status-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__comments_comments_component__ = __webpack_require__("../../../../../src/app/comments/comments.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subs_list_subs_list_component__ = __webpack_require__("../../../../../src/app/subs-list/subs-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sibling_posts_sibling_posts_component__ = __webpack_require__("../../../../../src/app/sibling-posts/sibling-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recent_posts_recent_posts_component__ = __webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_lightning_ng_lightning__ = __webpack_require__("../../../../ng-lightning/ng-lightning.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__bridge_bridge_component__ = __webpack_require__("../../../../../src/app/bridge/bridge.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reports_reports_component__ = __webpack_require__("../../../../../src/app/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_clarity_angular__ = __webpack_require__("../../../../clarity-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__admininterface_admininterface_component__ = __webpack_require__("../../../../../src/app/admininterface/admininterface.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { BrowserModule } from '@angular/platform-browser';





















// import { Messages2Component } from './src/app/messages2/messages2.component';



 //accordion and accordion tab






// import {ChartModule} from 'primeng/primeng';



// import {Wizard} from "clarity-angular";



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
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
            __WEBPACK_IMPORTED_MODULE_17__user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__bridge_bridge_component__["a" /* BridgeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_24__reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_26__groups_groups_component__["a" /* GroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__admininterface_admininterface_component__["a" /* AdmininterfaceComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["PasswordModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng_lightning_ng_lightning__["a" /* NglModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng_lightning_ng_lightning__["a" /* NglModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_22__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            // MenuItem,
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["DialogModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["ChartModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["DataListModule"],
            __WEBPACK_IMPORTED_MODULE_25_clarity_angular__["a" /* ClarityModule */],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["BreadcrumbModule"],
            __WEBPACK_IMPORTED_MODULE_23_primeng_primeng__["ChartModule"],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__mediator_service__["a" /* MediatorService */],
            __WEBPACK_IMPORTED_MODULE_4__kontroller_service__["a" /* KontrollerService */],
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_buzz__ = __webpack_require__("../../../../../src/app/buzz.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.forum = new __WEBPACK_IMPORTED_MODULE_5__app_buzz__["a" /* Buzz */]();
        //uID: string, ini: string, name: string, surname: string, email: string, cell: string, modules: string, pseodoname: string, title: string
    }
    AuthService.prototype.OnInit = function () {
        /**
         * This is temporary, populates the Users-DB with test Users.
         */
        this.forum.addUserBuzz("u88888888", 'LK', 'Thato', 'Maseko', 'nmothoa360@gmail.com', '0457814531', 'COS 124, COS 444, COS 333', 'Gina', 'MRS');
        this.forum.addUserBuzz("u12147892", 'ML', 'Jane', 'Formiu', "kamotsipa@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Lash', 'MR');
        this.forum.addUserBuzz("u56746321", 'GH', 'Pete', 'Vanti', "niknak@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Rush', 'MR');
        this.forum.addUserBuzz("u13546978", 'DL', 'Lefa', 'Cidi', "johnny@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Brad', 'MR');
        this.forum.addUserBuzz("u15457845", 'PO', 'Puti', 'Januo', "kites@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Litre', 'MRS');
        this.forum.addUserBuzz("u12457896", 'D', 'Johan', 'Reelo', "@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Serve', 'MR');
        this.forum.addUserBuzz("u16547889", 'WE', 'Nathan', 'Lates', "nj@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Chief', 'MR');
        this.forum.addUserBuzz("u17457856", 'A', 'Kamo', 'Pauls', "racc@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'High', 'MRS');
        this.forum.addUserBuzz("u12457896", 'E', 'Nkosi', 'Smith', "count@gmail.com", '0457814531', 'COS 124, COS 444, COS 333', 'Jack', 'MR');
        console.log("Length: " + this.forum.BuzzUsers.length);
    };
    AuthService.prototype.authenticateUser = function (uName) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('userID', uName);
        this.options.search = params;
        return this.http.get('/getUser/:userID', this.options)
            .map(function (body) { return body.toString(); })
            .toPromise();
    };
    /**
     *
     * @param {User} user The user being added to the Users-DB
     * @returns {Promise<any>}
     */
    AuthService.prototype.addUser = function (user) {
        var urlsearchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        urlsearchParams.append('userID', user.userID);
        urlsearchParams.append('initials', user.initials);
        urlsearchParams.append('name', user.name);
        urlsearchParams.append('surname', user.surname);
        urlsearchParams.append('email', user.email);
        urlsearchParams.append('cell', user.cell);
        urlsearchParams.append('modules', user.modules);
        urlsearchParams.append('pseodoname', user.pseodoname);
        urlsearchParams.append('title', user.title);
        var body = urlsearchParams.toString();
        return this.http.post('/createUser', user, this.options)
            .map(function (body) { return body.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    AuthService.prototype.simpleAuth = function (user) {
        console.log("SimpleAuth: " + user);
        return this.forum.validateME(user);
    };
    AuthService.prototype.getUser = function (user) {
        //let params = new HttpParams();
        //params = params.append('userID', user.userID);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        params.set('userID', user.userID);
        this.options.search = params;
        return this.http.get('/getUser/:userID', this.options)
            .map(function (body) { return body.toString(); })
            .toPromise()
            .then()
            .catch();
    };
    AuthService.prototype.getAll = function () {
        //let params = new HttpParams();
        //params = params.append('userID', user.userID);
        /*let params: URLSearchParams = new URLSearchParams();
        params.set('userID', user.userID);
        this.options.search = params;*/
        return this.http.get('/display')
            .map(function (body) { return body.toString(); })
            .toPromise()
            .then()
            .catch();
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/bridge/bridge.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bridge/bridge.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  bridge works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/bridge/bridge.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BridgeComponent; });
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

var BridgeComponent = (function () {
    function BridgeComponent() {
    }
    BridgeComponent.prototype.ngOnInit = function () {
    };
    return BridgeComponent;
}());
BridgeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bridge',
        template: __webpack_require__("../../../../../src/app/bridge/bridge.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bridge/bridge.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BridgeComponent);

//# sourceMappingURL=bridge.component.js.map

/***/ }),

/***/ "../../../../../src/app/buzz.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Buzz; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user__ = __webpack_require__("../../../../../src/app/user/user.ts");

var Buzz = (function () {
    function Buzz() {
        this.BuzzUsers = [];
    }
    Buzz.prototype.addUserBuzz = function (uID, ini, name, surname, email, cell, modules, pseodoname, title) {
        console.log("User Added: " + uID);
        this.BuzzUsers.concat(new __WEBPACK_IMPORTED_MODULE_0__user_user__["a" /* User */](uID, ini, name, surname, email, cell, modules, pseodoname, title));
    };
    Buzz.prototype.validateME = function (uID) {
        for (var V = 0; V < this.BuzzUsers.length; V++) {
            console.log("ValidateME: " + uID + " -- " + this.BuzzUsers[V].surname);
            if (uID == this.BuzzUsers[V].userID) {
                console.log("ValidateME MATCHED!!: " + uID + " -- " + this.BuzzUsers[V].surname);
                return true;
            }
        }
        console.log("OUT: " + uID);
        return false;
    };
    Buzz.prototype.identify = function (user) {
    };
    return Buzz;
}());

//# sourceMappingURL=buzz.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#div_co_tools {\n    position: absolute;\n    background-color: #BBB;\n    border: 1px solid grey;\n    border-radius: 5px;\n    display: none;\n    width: 60px;\n    height: 60px;\n    top: 32px;\n    right: 20px;\n}\n\n#btn_co_tooltip {\n    top: 6px;\n    left: 94%;\n    position: absolute;\n    height: 25px;\n}\n\n#btn_co_tooltip2 {\n    top: 6px;\n    left: 88%;\n    position: absolute;\n    height: 25px;\n}\n\n\n.gradient-pattern {\n    /*-webkit-box-sizing: content-box;*/\n    /*-moz-box-sizing: content-box;*/\n    /*box-sizing: content-box;*/\n    /*width: 320px;*/\n    /*height: 320px;*/\n    /*border: none;*/\n    /*font: normal 100%/normal Arial, Helvetica, sans-serif;*/\n    /*color: rgba(255,255,255,1);*/\n    /*-o-text-overflow: clip;*/\n    /*text-overflow: clip;*/\n    /*background: -webkit-linear-gradient(60deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -webkit-linear-gradient(-60deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -webkit-linear-gradient(60deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -webkit-linear-gradient(-60deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -webkit-linear-gradient(30deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), -webkit-linear-gradient(30deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), rgb(170, 170, 170);*/\n    /*background: -moz-linear-gradient(30deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -moz-linear-gradient(150deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -moz-linear-gradient(30deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -moz-linear-gradient(150deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), -moz-linear-gradient(60deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), -moz-linear-gradient(60deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), rgb(170, 170, 170);*/\n    /*background: linear-gradient(30deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), linear-gradient(150deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), linear-gradient(30deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), linear-gradient(150deg, rgb(153,153,153) 12%, rgba(0,0,0,0) 12.5%, rgba(0,0,0,0) 87%, rgb(153,153,153) 87.5%, rgb(153,153,153) 0), linear-gradient(60deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), linear-gradient(60deg, rgb(187,187,187) 25%, rgba(0,0,0,0) 25.5%, rgba(0,0,0,0) 75%, rgb(187,187,187) 75%, rgb(187,187,187) 0), rgb(170, 170, 170);*/\n    /*background-position: 0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px;*/\n    /*-webkit-background-origin: padding-box;*/\n    /*background-origin: padding-box;*/\n    /*-webkit-background-clip: border-box;*/\n    /*background-clip: border-box;*/\n    /*-webkit-background-size: 80px 140px;*/\n    /*background-size: 80px 140px;*/\n}\n\n.gold{\n    background-image: linear-gradient(#6d94bf, #446e9b 50%, #3e648d);\n}\n\n.gold:before{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border: 1px solid rgba(242,215,12,1);\n}\n\n\n.gold:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gold:hover:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 3%,rgba(255,255,255,1) 39%,rgba(252,235,0,1) 100%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gradient-pattern {\n    /*-webkit-box-sizing: content-box;*/\n    /*-moz-box-sizing: content-box;*/\n    /*box-sizing: content-box;*/\n    /*border: none;*/\n    /*font: normal 100%/normal Arial, Helvetica, sans-serif;*/\n    /*color: rgb(255, 255, 255);*/\n    /*-o-text-overflow: clip;*/\n    /*text-overflow: clip;*/\n    /*background: -webkit-linear-gradient(63deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(63deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(0deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -webkit-linear-gradient(-90deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: -moz-linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -moz-linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background-position: 0 5px, 10px 0, 0 10px, 10px 5px, 0 0, 0 0;*/\n    /*-webkit-background-origin: padding-box;*/\n    /*background-origin: padding-box;*/\n    /*-webkit-background-clip: border-box;*/\n    /*background-clip: border-box;*/\n    /*-webkit-background-size: 20px 20px;*/\n    /*background-size: 20px 20px;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default col-sm-6\" id=\"comments\" >\n  <div class=\"panel-heading gold\" style=\"color: black ; height: 38px;\">\n      <div style=\"float: right\">\n          <!--<button onclick=\"$('#comments').animate({top: '-150px', opacity: '0.0'}).hide(1000); \" (click)=\"addToNav('comments')\"  id=\"btn_co_tooltip\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-resize-small\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n          <!--</button>-->\n          <!--<button onclick=\"$('#co_searchTool').slideToggle(); $('#co_heading').slideToggle();\" id=\"btn_co_tooltip2\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-search\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n          <!--</button>-->\n      </div>\n      <div class=\"input-group\" id=\"co_searchTool\" style=\"display: none; position: absolute\">\n\n          <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" value=\"{{search_string}}\" [(ngModel)]=\"search_string\" style=\"height: 20px; width: 200px\">\n          <span class= \"glyphicon glyphicon-search\" style=\"height: 30px; font-size: 28px\" style=\"float: left\"> </span>\n      </div>\n      <h3 id=\"co_heading\" class=\"panel-title\"><b>Responses</b></h3>\n  </div>\n  <div class=\"panel-body gradient-pattern\" id=\"x14\" style=\"width: 100%; height: 80%; overflow-y: auto;\" >\n      <table class=\"table table-hover\">\n          <thead>\n          <tr>\n              <th>Heading</th>\n              <th>Username</th>\n              <th>Time</th>\n          </tr>\n          </thead>\n          <!--*ngFor=\"let p of rp_Posts\"-->\n          <tr *ngFor=\"let p of co_Posts\" (click)=\"selectedSibling(p.postID, p.heading, p.level)\">\n              <td>{{p.heading}}</td>\n              <td>{{p.userID}}</td>\n              <td>{{time_ago(p.timestamp)}}</td>\n          </tr>\n          <tr *ngIf=\"(co_Posts.length == 0)\">\n              <td>No responses to current message</td>\n          </tr>\n      </table>\n    </div>\n</div>\n<style>\n\n    .banana2:hover{\n        background: greenyellow;\n        cursor:pointer;\n    }\n\n    .glyphicon-th:hover{\n        color: lawngreen;\n    }\n\n    .tools:hover{\n        color: white;\n        background-color: black;\n        background: black;\n        cursor:pointer;\n    }\n</style>\n<style>\n    .banana:hover{\n        background: greenyellow;\n        cursor:pointer;\n    }\n    .chip {\n        display: inline-block;\n        float: right;\n        /*padding: 0 25px;*/\n        height: 30px;\n        width: 200px;\n        font-size: 16px;\n        line-height: 50px;\n        border-radius: 25px;\n        background-color: #BBB;\n        padding-left: 20px;\n    }\n\n    .chip div {\n        float: right;\n        /*margin: 0 10px 0 -25px;*/\n        padding-left: 30px;\n        height: 45px;\n        width: 45px;\n        border-radius: 100%;\n        background-color: #000;\n        background-image: url(\"../../assets/img_avatar1.png\");\n        -webkit-background-size: cover;\n        -moz-background-size: cover;\n        -o-background-size: cover;\n        border: 4px solid #BBB;\n        padding-bottom: 30px;\n        padding-left: 0px;\n    }\n</style>"

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
        this.co_selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.co_addToNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search_string = "";
    }
    CommentsComponent.prototype.ngOnInit = function () {
        // this.getPosts();
    };
    CommentsComponent.prototype.selectedSibling = function (postToDelete, heading, index) {
        this.co_selectedItem.emit({ postId: postToDelete, heading: heading, level: index });
    };
    CommentsComponent.prototype.addToNav = function (comp_id) {
        this.co_addToNav.emit(comp_id);
    };
    //Time Function
    CommentsComponent.prototype.time_ago = function (time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date)
                    time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'Yesterday', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'Last week', 'Next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'Last month', 'Next month'],
            [29030400, 'months', 2419200],
            [58060800, 'Last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000, token = 'ago', list_choice = 1;
        if (seconds == 0) {
            return 'Just now';
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    };
    return CommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "buzz_comments", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "user_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "co_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "co_selectedItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CommentsComponent.prototype, "co_addToNav", void 0);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _a || Object])
], CommentsComponent);

var _a;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = (function () {
    function Globals() {
    }
    return Globals;
}());

//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#gp_nav_menu\n{\n    width: 33%;\n    height: 85%;\n    border-radius: 0%;\n    top: 50px;\n}\n\n#gp_conversations\n{\n    width: 66%;\n    height:460px;\n    position: absolute;\n    border-radius: 0%;\n    top: 13.5px;\n    left: 33%;\n    font-size: 150%;\n}\n\n.gradient-block-pattern {\n\n}\n\n.media_my_mess{\n    background-color: rgba(0,0,255,0.1);\n    width: 80%;\n    border-radius: 20px;\n    border: 1px solid #888;\n}\n\n.media_responses{\n    background-color: rgba(100,1,120,0.2);\n    width: 80%;\n    border-radius: 20px;\n    border: 1px solid mediumpurple;\n}\n\n.media2{\n    background-color: rgba(100,222,90,0.8);\n    width: 200px;\n    position: absolute;\n    border: 3px solid wheat;\n    border-radius: 0px;\n    border: 1px solid #888;\n    left: 230px;\n}\n\n.media-body p{\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.media-body_friends_mess h4{\n    padding-right: 10px;\n    background-color: deepskyblue;\n    border: 1px solid deepskyblue;\n    width: 90%;\n    padding-left: 10px;\n}\n\n.media-body_my_mess h4{\n    padding-right: 10px;\n    background-color: mediumpurple;\n    border: 1px solid mediumpurple;\n    width: 90%;\n    padding-left: 10px;\n}\n.media-right{\n    background-size: cover;\n}\n\n.media-body div{\n    background-image: url(" + __webpack_require__("../../../../../src/assets/img_avatar1.png") + ");\n    background-size: cover;\n}\n\n.gradient-text {\n    display: inline-block;\n    box-sizing: content-box;\n    border: none;\n    font: normal 30px/1 \"Aladin\", Helvetica, sans-serif;\n    color: rgba(48,48,48,1);\n    text-align: center;\n    text-transform: normal;\n    text-overflow: clip;\n    white-space: pre;\n    text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67) ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"My Groups\" [(visible)]=\"display\" modal=\"modal\" width=\"900\" height=\"600\">\n  <div class=\"panel panel-default\" id=\"gp_nav_menu\">\n    <div class=\"panel-heading gold\" style=\" color: black \">\n      <h3 class=\"panel-title\"><b>My Groups</b></h3>\n    </div>\n    <div class=\"panel-body gradient-block-pattern\" style=\"font-size: 12px; width: 100%; height:420px; color: #333;  overflow-y: scroll\">\n      <!--{{groupInfo | json}}-->\n      <!--{{gr_messages | json}}-->\n      <div  *ngFor=\"let p1 of myGroups\">\n        <br>\n        <div class=\"btn-group\" (click)=\"selectedGroup(p1)\" >\n\n          <a href=\"#\" class=\"btn btn-default\">{{p1}}</a>\n          <a href=\"#\" class=\"btn btn-success dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-plus-sign\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\" onclick=\"$('#gr_div_addToGroup').show()\">Add Member</a></li>\n          </ul>\n          <br>\n        </div>\n        </div>\n        <div *ngIf=\"myGroups.length == 0\">\n          You Have No Current Groups.\n        </div>\n      <hr>\n      <button class=\"btn btn-info\" onclick=\"$('#gr_div_createGroup').show()\" >Create new Group</button>\n    </div>\n  </div>\n  <div>\n    <div class=\"panel panel-default\" id=\"gp_conversations\" style=\"\">\n      <div class=\"panel-heading gold\" style=\" color: black \">\n        <h3 class=\"panel-title\"><b>Conversations</b></h3>\n      </div>\n      <div class=\"panel-body gradient-block-pattern\" style=\" font-size: 12px; width: 100%; position: relative; height:90%; color: #333; \">\n        <div style=\"overflow-y: auto; height: 290px; \">\n        <div id=\"gr_div_createGroup\" class=\"well\" style=\"display: none;\">\n          <p>Please note all groups are valid for a maximum period of 7 days</p>\n          <label >Group Name: </label>\n          <input type=\"text\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"groupNameView\" value=\"{{groupNameView}}\">\n          <label >Pay for group: </label>\n          <input type=\"checkbox\" class=\"form-control\" style=\"width: 40px\" [(ngModel)]=\"confirm_payment\" value=\"confirm_payment\">\n          <button id=\"btn_create_group\" class=\"btn btn-danger\" (click)=\"createGroup()\">CREATE</button>\n          <button class=\"btn btn-danger\" onclick=\"$('#gr_div_createGroup').hide()\">CANCEL</button>\n          <hr>\n        </div>\n        <div id=\"gr_div_addToGroup\" class=\"well\" style=\"display: none\">\n          <!--<p>Please note all groups are valid for a maximum period of 7 days and cos 200$</p>-->\n          <label >Add Group Member: </label>\n          <input type=\"text\" class=\"form-control\" style=\"width: 200px\" [(ngModel)]=\"newMeber\" value=\"{{newMeber}}\">\n          <button class=\"btn btn-danger\" (click)=\"addToGroup()\">ADD</button>\n          <button class=\"btn btn-danger\" onclick=\"$('#gr_div_addToGroup').hide()\">CANCEL</button>\n          <hr>\n        </div>\n\n          <div class=\"media2\" id=\"div_gr_info\" style=\"display: none\" *ngIf=\"groupInfo!=null\">\n            <div class=\"media-body\">\n              <p>Creator: {{groupInfo.initiator}} Date Of Expiry: {{groupInfo.expiry_date}}</p>\n              <p>Members: </p>\n              <p style=\"margin-left: 30px\" > <span *ngFor=\"let member of groupInfo.peers\">{{member}} </span> </p>\n            </div>\n            <br>\n          </div>\n          <div class=\"gradient-text\" *ngIf=\"groupInfo != null\" onmouseenter=\"$('#div_gr_info').show();\" onmouseleave=\"$('#div_gr_info').hide();\">\n            {{groupInfo.groupName}}.\n          </div>\n          <div *ngFor=\"let p1 of gr_messages\" >\n            <!--<div class=\"media\" style=\"\" *ngIf=\"p1.creator != userId\">-->\n            <div class=\"media media_my_mess media-body_friends_mess\" style=\"float: left;margin-botton: 10px;\" *ngIf=\"p1.creator == userId\">\n              <div style=\"float: left; border: 1px solid yellow; width: 70px; height: 70px; background-image: url('../../assets/img_avatar1.png'); background-size: 100% 100%;\">\n              </div>\n              <div class=\"media-body \">\n                <h4 class=\"media-heading\">{{p1.creator}} </h4>\n                <p>{{p1.message}}</p>\n              </div>\n            </div>\n\n        <!-- Right-aligned -->\n            <!--<div class=\"media\" style=\"float: right\" *ngIf=\"p1.creator == userId\" xoxo>-->\n            <div class=\"media media_responses media-body_my_mess\" style=\"float: right; margin-botton: 10px;\" *ngIf=\"p1.creator != userId\">\n              <div class=\"media-body\">\n                <div style=\"float: right; border: 1px solid yellow; width: 70px; height: 70px; background-image: url('../../assets/img_avatar1.png');\">\n                </div>\n                <h4 class=\"media-heading\">{{p1.creator}} </h4>\n                <p>{{p1.message}}</p>\n              </div>\n            </div>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        </div>\n        <div style=\"position: absolute; bottom: 0px; background-color: black; border: 2px solid white; padding-left: 0px; left: 0px; width: 100%\">\n          <button (click)=\"gr_create_post(groupInfo._id)\" class=\"btn btn-danger\" style=\"float: right; margin-right:9px;margin-top: 20px \">Send</button>\n          <div class=\"form-group\" style=\"margin-left: 20px\">\n            <label for=\"comment\" style=\"color: white\">Comment:</label>\n            <textarea class=\"form-control\" rows=\"2\" id=\"comment\" style=\"width: 500px\" [(ngModel)]=\"gr_response\" value=\"{{gr_response}}\"></textarea>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n  <p-growl [(value)]=\"growlAlert\"></p-growl>\n</p-dialog>\n\n\n<button type=\"text\" id=\"group_trigger\" (click)=\"showDialog()\" icon=\"fa-external-link-square\" label=\"Show\" style=\"display:none\">Show</button>\n"

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kontroller_service__ = __webpack_require__("../../../../../src/app/kontroller.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupsComponent = (function () {
    function GroupsComponent(_kontrolService, _mediatorService) {
        this._kontrolService = _kontrolService;
        this._mediatorService = _mediatorService;
        this.display = false;
        this.confirm_payment = false;
        this.userId = "";
        this.groupName = "";
        this.groupNameView = "";
        this.myGroups = [];
        // groupInfo = null ;
        this.groupInfo = null;
        this.gr_messages = [];
        this.gr_pseudonames = [];
        this.newMeber = "";
        this.gr_response = "";
        this.growlAlert = [];
    }
    GroupsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.refresh_MyGroups();
        }, 2000);
    };
    GroupsComponent.prototype.refresh_MyGroups = function () {
        var _this = this;
        if (this.display == true && sessionStorage.getItem("sessionID")) {
            // alert("Called refreshMyGroups n sessionID set");
            this._kontrolService.groupsJoined(sessionStorage.getItem("sessionID"))
                .then(function (myGroups) { return _this.myGroups = myGroups; })
                .catch(function (err) { return console.log(err); });
            this.userId = sessionStorage.getItem("sessionID");
            if (this.groupInfo != null)
                this._kontrolService.getGroupMessages(this.groupInfo._id)
                    .then(function (gr_messages) { return _this.gr_messages = gr_messages; })
                    .catch(function (err) { return console.log(err); });
        }
        else {
        }
    };
    GroupsComponent.prototype.createGroup = function () {
        var _this = this;
        this.groupName = this.groupNameView;
        // alert("Decision: "+this.confirm_payment+" |||GroupName: "+this.groupNameView);
        if (sessionStorage.getItem("sessionID") && this.confirm_payment) {
            this._kontrolService.createGroup({ initiator: sessionStorage.getItem("sessionID"), peers: [], groupName: this.groupNameView })
                .then(function (status) { _this.hide_createGroup(); })
                .catch(function (err) { return console.log(err); });
            document.getElementById("gr_div_createGroup").style.display = "none";
        }
        else {
            // alert("Sorry, Unable to Create Group. ");
        }
    };
    GroupsComponent.prototype.addToGroup = function () {
        var _this = this;
        // this.hide_addMember();
        // alert("Hey");
        this._kontrolService.getBasicUserInfo(this.newMeber)
            .then(function (status) { if (status) {
            _this.appendNewMember(_this.newMeber);
        } })
            .catch(function (err) { return console.log(err); });
    };
    GroupsComponent.prototype.appendNewMember = function (joinee) {
        var _this = this;
        // this.hide_addMember();
        // alert("Hey");
        this._kontrolService.joinGroup({ peers: [joinee], groupName: this.groupName })
            .then(function (status) { if (status) {
            _this.hide_addMember();
        } })
            .catch(function (err) { return console.log(err); });
        this.selectedGroup(this.groupName);
    };
    GroupsComponent.prototype.selectedGroup = function (p1) {
        var _this = this;
        this.groupName = p1;
        this._kontrolService.getGroupInformation(this.groupName)
            .then(function (groupInfo) { _this.groupInfo = groupInfo; _this.refresh_MyGroups(); })
            .catch(function (err) { return console.log(err); });
    };
    GroupsComponent.prototype.gr_create_post = function (id) {
        var _this = this;
        this._kontrolService.createMessage({ groupID: id, student_number: sessionStorage.getItem("sessionID"), message: this.gr_response })
            .then(function (status) { _this.gr_response = ""; })
            .catch(function (err) { return console.log(err); });
    };
    GroupsComponent.prototype.hide_addMember = function () {
        var _this = this;
        document.getElementById('gr_div_addToGroup').style.display = "none";
        this.growlAlert.push({ severity: 'success', summary: 'Success Message', detail: 'Added User' });
        this.timer = setTimeout(function () {
            _this.growlAlert.pop();
        }, 3000);
    };
    GroupsComponent.prototype.hide_createGroup = function () {
        var _this = this;
        document.getElementById('gr_div_addToGroup').style.display = "none";
        this.growlAlert.push({ severity: 'success', summary: 'Success Message', detail: 'Created Group' });
        this.timer = setTimeout(function () {
            _this.growlAlert.pop();
        }, 3000);
    };
    return GroupsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GroupsComponent.prototype, "userObject", void 0);
GroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-groups',
        template: __webpack_require__("../../../../../src/app/groups/groups.component.html"),
        styles: [__webpack_require__("../../../../../src/app/groups/groups.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__kontroller_service__["a" /* KontrollerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__kontroller_service__["a" /* KontrollerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mediator_service__["a" /* MediatorService */]) === "function" && _b || Object])
], GroupsComponent);

var _a, _b;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/kontroller.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KontrollerService; });
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



var KontrollerService = (function () {
    function KontrollerService(_http) {
        this._http = _http;
    }
    KontrollerService.prototype.createGroup = function (p) {
        console.log("CALLED CREATE GROUP");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/createGroup/", p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    KontrollerService.prototype.createMessage = function (p) {
        console.log("CALLED CREATE MESSAGE");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/createMessage/", p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    KontrollerService.prototype.getBasicUserInfo = function (x) {
        console.log("CALLED GETUSER");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getBasicUserInfo/" + x, options)
            .map(function (userID) { return userID.json(); })
            .toPromise();
    };
    KontrollerService.prototype.getGroupMessages = function (x) {
        console.log("CALLED GETGROUP MESSAGES");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getGroupMessages/" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.groupsJoined = function (x) {
        console.log("CALLED GROUPS JOINED");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/groupsJoined/" + x, options)
            .map(function (data) { return data.json().groups; })
            .toPromise();
    };
    KontrollerService.prototype.getGroupInformation = function (p) {
        console.log("CALLED GET GROUP INFO");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getGroupInformation/" + p, p)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.getUserVotes = function (p, u) {
        console.log("CALLED GET GET USER VOTES");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getUserStats/" + p + "/" + u, p)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.joinGroup = function (p) {
        console.log("CALLED JOIN GROUP");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.patch("/joinGroup/", p)
            .map(function (groupname) { return groupname; })
            .toPromise();
    };
    KontrollerService.prototype.getMilestones = function (x) {
        console.log("CALLED GET milestones");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getMilestones" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.getUserPoints = function (x) {
        console.log("CALLED GET userpoints");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getUserPoints/" + x, options)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    KontrollerService.prototype.getUserStatus = function (x) {
        console.log("CALLED GET getUserStatus");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getUserStatus/" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.studentsInModule = function (x) {
        console.log("CALLED GET studentsInModule");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/studentsInModule/" + x, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    KontrollerService.prototype.attempt = function (x) {
        console.log("CALLED GET attempt");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/attempt/" + x, options)
            .map(function (data) { return data.json().text; })
            .toPromise();
    };
    KontrollerService.prototype.createMilestone = function (p) {
        console.log("CALLED CREATE MILESTONE");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/createMilestone", p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return KontrollerService;
}());
KontrollerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], KontrollerService);

var _a;
//# sourceMappingURL=kontroller.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {GuardAuthService} from '../guard-auth.service';


var LandingComponent = (function () {
    function LandingComponent(authService, roo, glow) {
        this.authService = authService;
        this.roo = roo;
        this.glow = glow;
        this.user = '';
        this.pass = '';
        this.login = false;
        this.isLoggedIn = false;
        this.validated = true; // Temporary
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent.prototype.onLoginClicked = function () {
        /*this.authService.addUser(this.userInstance)
          .then(status => console.log("User added to DB"))
          .catch(error => console.log(error));*/
    };
    LandingComponent.prototype.onTour = function () {
        /*this.authService.getUser(this.userInstance)
          .then(Response => Response.toString())
          .catch(error => console.log(error.toString()));

        this.authService.getAll()
          .then( body => console.log("All: " + body.toString()))
          .catch(error => console.log(error));*/
    };
    LandingComponent.prototype.onLoginPressed = function () {
        this.login = !this.login;
    };
    LandingComponent.prototype.validateUser = function () {
        // this.validated = this.authService.simpleAuth(this.user);
        console.log("ValidateUser: " + this.validated);
    };
    LandingComponent.prototype.redirect = function () {
        document.getElementById("dodo").style.display = 'none';
        document.getElementById("dodo").style.visibility = 'hidden';
        document.getElementById("bobo").style.display = 'none';
        document.getElementById("bobo").style.visibility = 'hidden';
        //this.validateUser();
        if (this.validated) {
            this.roo.navigate(['/dashboard']);
        }
        else {
            //Route elsewhere...
        }
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */]) === "function" && _c || Object])
], LandingComponent);

var _a, _b, _c;
//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#log_containment{\n    /*border: 2px solid red;*/\n\n\n    position: absolute;\n    margin-left: 35%;\n    margin-top: 10%;\n}\n\n.button {\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 10px;\n    border: none;\n    font: normal 24px/normal \"Warnes\", Helvetica, sans-serif;\n    color: rgba(255,255,255,1);\n    text-decoration: normal;\n    text-align: center;\n    text-overflow: clip;\n    white-space: pre;\n    text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de ;\n    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.button:hover {\n    text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\" id=\"bobo\">\n    <div class=\"containerX\">\n        <h1>Welcome to the Buzz Community</h1>\n        <p>A <i>gamification</i> based online educational forum that works and plays hard!</p>\n        <div>\n            <a class=\"btn btn-primary\" (click)=\"login_view = !login_view\" role=\"button\">Login</a>\n            <!--<a class=\"btn btn-warning btn-lg\" role=\"button\">Take a Tour &raquo;</a>-->\n        </div>\n    </div>\n</div>\n\n<div class=\"container\" id=\"dodo\">\n    <!-- Example row of columns -->\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <h2>Buzz Bounty&trade;</h2>\n            <p>....... ...... ................ ....................... ..................\n                ......... .. ................ ................ ................\n                ................ ............... ......... .. .. . </p>\n            <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n            <h2>Rewards</h2>\n            <p>An online virtual currency, which enables you to grow and evolve not only on the Buzz platform but your mental ability.\n            </p>\n            <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n        </div>\n        <div class=\"col-md-4\">\n            <form *ngIf=\"login_view; else alterX\" style=\"align-items: center\">\n                <img  src=\"../../assets/kumladi_glow.png\" height=\"100\" width=\"160\">\n                <div class=\"form-group\">\n                    <div class=\"ui-float-label\" style=\" width: 150px; \">\n                        <input id=\"float-input\" type=\"text\" size=\"40\" style=\"height: 36px\" pInputText maxlength=\"9\" required>\n                        <label for=\"float-input\">Username: </label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <div class=\"ui-float-label\" style=\"width: 150px; \">\n                        <input id=\"float-input2\" type=\"password\" size=\"40\" style=\"height: 36px\" maxlength=\"9\" required>\n                        <label for=\"float-input2\">Password: </label>\n                    </div>\n                </div>\n                <button type=\"submit\" (click)=\"loginAttempt()\" class=\"btn btn-success\">Buzz-In</button>\n                <p-growl [(value)]=\"responseDialog\"></p-growl>\n             </form>\n\n            <ng-template #alterX>\n                <h2>Open Community</h2>\n                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus,\n                    tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa\n                    justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n                <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n            </ng-template>\n\n        </div>\n    </div>\n    </div>\n\n    <hr>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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

// import '/public/src/app/login/particle_effect.js';
// declare var myExtObject: any;
// declare var webGlObject: any;
var LoginComponent = (function () {
    function LoginComponent() {
        this.authenticate_User = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.refreshedPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.login_view = false;
        this.login_id = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.refreshedPage.emit();
        // myExtObject.func1();
    };
    LoginComponent.prototype.loginAttempt = function () {
        console.log("login.compo.ts: " + this.user_Id);
        this.login_id = document.getElementById("float-input").value;
        this.user_password = document.getElementById("float-input2").value;
        this.authenticate_User.emit({ usrId: this.login_id, usrPs: this.user_password });
        document.getElementById("float-input").value = "";
        document.getElementById("float-input2").value = "";
    };
    return LoginComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "user_Id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "user_password", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "responseDialog", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "authenticate_User", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], LoginComponent.prototype, "refreshedPage", void 0);
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

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
    MediatorService.prototype.createThread = function (x, p) {
        console.log("CALLED CREATE RESPONCE-POST");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post("/createPost", p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    MediatorService.prototype.upVote = function (x, p) {
        console.log("CALLED UPVOTE ");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(p);
        return this._http.post("/upVote", p)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    MediatorService.prototype.downVote = function (x, p) {
        console.log("CALLED DOWNVITE ");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(p);
        return this._http.post("/downVote", p)
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
    MediatorService.prototype.getUpVotes = function (x) {
        console.log("CALLED GET-UP-VOTES");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getUpVotes/" + x, options)
            .map(function (data) { return data.json().num; })
            .toPromise();
    };
    MediatorService.prototype.getDownVotes = function (x) {
        console.log("CALLED GET-DOWN-VOTES");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getDownVotes/" + x, options)
            .map(function (data) { return data.json().num; })
            .toPromise();
    };
    MediatorService.prototype.getUser = function (x) {
        console.log("CALLED GETUSER");
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getUser/" + x, options)
            .map(function (userID) { return userID.json(); })
            .toPromise();
    };
    MediatorService.prototype.getChildPosts = function (x, p) {
        console.log("CALLED GET CHILDREN of " + x);
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getChildPosts/" + x + "/" + p, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    MediatorService.prototype.getSiblingPosts = function (x, p) {
        console.log("CALLED GET SIBLINGS of " + x);
        var authtoken = localStorage.getItem('auth_token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Accept': 'application/json' });
        headers.append('Authorization', 'Bearer ${authToken}');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get("/getSiblings/" + x + "/" + p, options)
            .map(function (data) { return data.json().data; })
            .toPromise();
    };
    MediatorService.prototype.getRecentPosts = function (x) {
        console.log("CALLED GET RECENT POSTS " + x);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
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
exports.push([module.i, "#div_likes_contain{\n\n}\n\n#div_likes_contain div:hover{\n    background-color: deepskyblue;\n    cursor: pointer;\n}\n\n#div_dislikes_contain div:hover{\n    background-color: red;\n    cursor: pointer;\n}\n\n#div_reply_contain div:hover{\n    background-color: greenyellow;\n    cursor: pointer;\n}\n\n#div_likes_icon{\n    border: 2px solid lightskyblue;\n    background-color: cornflowerblue;\n}\n\n#div_dislikes_icon{\n    border: 2px solid indianred;\n    background-color: darkred;\n}\n\n#div_reply_icon{\n    border: 2px solid lawngreen;\n    background-color: green;\n}\n\n#div_mess_tools {\n    position: absolute;\n    background-color: #BBB;\n    border: 1px solid grey;\n    border-radius: 5px;\n    display: none;\n    width: 60px;\n    height: 60px;\n    top: 32px;\n    right: 20px;\n}\n\n#btn_mess_tooltip {\n    top: 6px;\n    left: 94%;\n    position: absolute;\n    height: 25px;\n}\n\n\n\n.gradient-pattern {\n    /*-webkit-box-sizing: content-box;*/\n    /*-moz-box-sizing: content-box;*/\n    /*box-sizing: content-box;*/\n    /*border: none;*/\n    /*font: normal 100%/normal Arial, Helvetica, sans-serif;*/\n    /*color: rgb(255, 255, 255);*/\n    /*-o-text-overflow: clip;*/\n    /*text-overflow: clip;*/\n    /*background: -webkit-linear-gradient(63deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(63deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(0deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -webkit-linear-gradient(-90deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: -moz-linear-gradient(27deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -moz-linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: linear-gradient(27deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(210,210,210) 5px, rgba(0,0,0,0) 5px), linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background-position: 0 5px, 10px 0, 0 10px, 10px 5px, 0 0, 0 0;*/\n    /*-webkit-background-origin: padding-box;*/\n    /*background-origin: padding-box;*/\n    /*-webkit-background-clip: border-box;*/\n    /*background-clip: border-box;*/\n    /*-webkit-background-size: 20px 20px;*/\n    /*background-size: 20px 20px;*/\n}\n\n\n\n.gold{\n    background-image: linear-gradient(#6d94bf, #446e9b 50%, #3e648d);\n}\n\n.gold:before{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border: 1px solid rgba(242,215,12,1);\n}\n\n\n.gold:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gold:hover:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 3%,rgba(255,255,255,1) 39%,rgba(252,235,0,1) 100%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default col-sm-6\" id=\"message\">\n  <div class=\"panel-heading gold\" style=\" color: black ; height: 38px\">\n    <div style=\"float: right\">\n      <!--<button onclick=\"$('#message').animate({top: '-150px', opacity: '0.0'}).hide(1000); \" (click)=\"addToNav('mess')\" id=\"btn_mess_tooltip\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-resize-small\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n      <!--</button>-->\n    </div>\n    <h3 class=\"panel-title\"><b> Messages </b></h3>\n\n  </div>\n  <div class=\"panel-body gradient-pattern\" id=\"x13\" style=\"width: 100%; height: 90%; colour: black\" >\n    <div *ngIf=\"mess_Post\" style=\"height: 85%; width: 100%; overflow-y: auto\">\n      <h3 style=\"\"><b>{{mess_Post.heading}}</b></h3><br>\n      <p >{{mess_Post.module}} {{mess_Post.content}}</p>\n      <p style=\"float: right\"><i>Posted by {{mess_Post.studentID}}</i></p>\n      <p style=\"float: right\"><i>On {{mess_Post.timestamp}}</i></p>\n      <br><br>\n      <div class=\"chip2\">\n\n        <div > </div></div><br><br>\n      <!--</div>-->\n      <div style=\"height: 28px; width: 100%;   position: absolute; padding-left: 0px; left: 0px; bottom: 28px; font-size: 20px; color: black\">\n      </div>\n      <div style=\"height: 28px; width: 100%; position: absolute; padding-left: 0px; left: 0px; bottom: 0px; font-size: 20px; color: white\">\n        <div id=\"div_likes_contain\" style=\"display: block; float: left; width: 120px; margin-left: 180px; padding-left: 30px;\">\n          <p style=\"float: right; padding-right: 40px; font-size: 16px; color: black; padding-top: 5px\">{{upVotes}}</p>\n          <div id=\"div_likes_icon\"style=\"height: 30px; width: 30px; border-radius: 100%;\">\n            <span class=\"glyphicon glyphicon-thumbs-up\" style=\"font-size: 21px; color: white; float: left; padding-top: 4px\" (click)=\"likePost()\"></span>\n          </div>\n\n        </div>\n\n\n        <div id=\"div_reply_contain\" style=\"display: block; float: left; width: 70px; padding-left: 10px; \" >\n          <div id=\"div_reply_icon\"style=\"height: 30px; width: 30px; border-radius: 100%;\" >\n        <span style=\"margin-top: 4px; margin-left: 4px;\" class=\"glyphicon glyphicon-comment\" data-toggle=\"modal\" data-target=\"#myModalHorizontal2\">\n        </span>\n          </div>\n        </div>\n\n        <div id=\"div_dislikes_contain\" style=\"display: block; float: left; width: 100px; padding-left: 30px; color: white\">\n          <p style=\"float: right; padding-right: 20px; color: black; font-size: 16px;  padding-top: 5px\">{{downVotes}}</p>\n          <div id=\"div_dislikes_icon\"style=\"height: 30px;  width: 30px; border-radius: 100%;\">\n            <span class=\"glyphicon glyphicon-thumbs-down\" style=\"font-size: 21px; color: white; float: left; padding-top: 4px\" (click)=\"dislikePost()\"></span>\n          </div>\n        </div>\n        <div id=\"div_replyIcon_contain\" style=\"display: block; float: left; width: 100px; padding-left: 300px\">\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<style>\n\n  .banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n  }\n\n  .glyphicon-th:hover{\n    color: lawngreen;\n  }\n\n  .tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n  }\n\n  .chip2 {\n    display: inline-block;\n    float: right;\n    /*padding: 0 25px;*/\n    height: 50px;\n    font-size: 16px;\n    line-height: 50px;\n    border-radius: 25px;\n    background-color: #BBB;\n    padding-left: 20px;\n  }\n\n  .chip2 div {\n    float: right;\n    /*margin: 0 10px 0 -25px;*/\n    padding-left: 30px;\n    height: 65px;\n    width: 65px;\n    border-radius: 100%;\n    background-image: url(\"../../assets/img_avatar1.png\");\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    -o-background-size: cover;\n    background-size: cover;\n    border: 4px solid #BBB;\n    padding-bottom: 30px;\n    padding-left: 0px;\n  }\n</style>\n"

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


var MessagesComponent = (function () {
    function MessagesComponent(_mediatorService) {
        this._mediatorService = _mediatorService;
        this.mess_post_liked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mess_addToNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mess_post_disliked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.addToNav = function (comp_id) {
        this.mess_addToNav.emit(comp_id);
    };
    MessagesComponent.prototype.likePost = function () {
        this.mess_post_liked.emit();
    };
    MessagesComponent.prototype.dislikePost = function () {
        this.mess_post_disliked.emit();
    };
    //Time Function
    MessagesComponent.prototype.time_ago = function (time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            // case 'object':
            //     if (time.constructor === Date) time = time.getTime();
            //     break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'Yesterday', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'Last week', 'Next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'Last month', 'Next month'],
            [29030400, 'months', 2419200],
            [58060800, 'Last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000, token = 'ago', list_choice = 1;
        if (seconds == 0) {
            return 'Just now';
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    };
    return MessagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "mess_Post", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "downVotes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "upVotes", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "mess_post_liked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "mess_addToNav", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], MessagesComponent.prototype, "mess_post_disliked", void 0);
MessagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#div_breadCrums {\n    color: deepskyblue;\n}\n\n#div_breadCrums div p{\n    display: inline;\n}\n\n#div_breadCrums div p:hover{\n    color: white;\n    cursor: pointer;\n}\n\n#div_breadCrums div .glyphicon{\n    color: white;\n    padding-left: 3px;\n    padding-right: 3px;\n}\n\n#div_breadCrums:hover{\n    cursor:default !important;\n}\n\n.silver{\n    background: linear-gradient(45deg,  rgba(160,160,160,1) 0%,rgba(232,232,232,1) 56%);\n}\n\n.silver:before{\n    background: linear-gradient(45deg,  rgba(181,181,181,1) 0%,rgba(252,252,252,1) 56%,rgba(232,232,232,1) 96%);\n    border: 1px solid rgba(181,181,181,1);\n}\n\n\n.silver:after{\n    background: linear-gradient(45deg,  rgba(181,181,181,1) 0%,rgba(252,252,252,1) 56%,rgba(232,232,232,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(160,160,160,0.3);\n    border-right: 1px solid rgba(160,160,160,0.5);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.silver:hover:after{\n    background: linear-gradient(45deg,  rgba(181,181,181,1) 0%,rgba(252,252,252,1) 38%,rgba(232,232,232,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(160,160,160,0.3);\n    border-right: 1px solid rgba(160,160,160,0.5);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.button {\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 10px;\n    border: none;\n    font: normal 24px/normal \"Warnes\", Helvetica, sans-serif;\n    color: rgba(255,255,255,1);\n    text-decoration: normal;\n    text-align: center;\n    text-overflow: clip;\n    white-space: pre;\n    text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de ;\n    transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);\n}\n\n.button:hover {\n    text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-fixed-top\" role=\"navigation\">-->\n<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n\n      </button>\n     <!-- <a class=\"navbar-brand\" href=\"#\">Buzz</a>-->\n      <a href=\"#\" class=\"btn btn-toolbar btn-lg\" id=\"menuCon\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n          <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n        </button>\n      </a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"button\" style=\"height: 30px; width: 30px; position: absolute\">Buzz</div>\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav\" style=\"margin-left: 100px\">\n        <!--<li class=\"active\"><a href=\"#\">Buzz<span class=\"sr-only\">(current)</span></a></li>-->\n        <li *ngFor=\"let p of nb_comp_ids\">\n          <div href=\"#\" >\n            <ngl-pill  (click)=\"restoreToDash(p)\" *ngIf=\"(p === 'sibb')\" onclick=\"$('#sibb').animate({top: '13%', opacity: '1.0'}, 'fast').show(100);\" style=\"float: left\">\n              <ngl-icon category=\"standard\" icon=\"feedback\" nglPillImage></ngl-icon>\n              <a href=\"javascript:void(0)\">Related Post</a>\n            </ngl-pill>\n            <ngl-pill  (click)=\"restoreToDash(p)\" *ngIf=\"(p === 'mess')\" onclick=\"$('#message').animate({top: '13%', opacity: '1.0'}, 'fast').show(100);\" style=\"float: left\">\n              <ngl-icon category=\"standard\" icon=\"feedback\" nglPillImage></ngl-icon>\n              <a href=\"javascript:void(0)\">Message</a>\n            </ngl-pill>\n            <ngl-pill  (click)=\"restoreToDash(p)\" *ngIf=\"(p === 'recent')\" onclick=\"$('#recent').animate({top: '55%', opacity: '1.0'}, 'fast').show(100);\" style=\"float: left\">\n              <ngl-icon category=\"standard\" icon=\"feedback\" nglPillImage></ngl-icon>\n              <a href=\"javascript:void(0)\">Recent Posts</a>\n            </ngl-pill>\n            <ngl-pill  (click)=\"restoreToDash(p)\" *ngIf=\"(p === 'comments')\" onclick=\"$('#comments').animate({top: '55%', opacity: '1.0'}, 'fast').show(100);\" style=\"float: left\">\n              <ngl-icon category=\"standard\" icon=\"feedback\" nglPillImage></ngl-icon>\n              <a href=\"javascript:void(0)\">Message Responces</a>\n            </ngl-pill>\n            <ngl-pill  (click)=\"restoreToDash(p)\" *ngIf=\"(p === 'subs')\" onclick=\"$('#subs').animate({top: '80%', opacity: '1.0'}, 'fast').show(100);\" style=\"float: left\">\n              <ngl-icon category=\"standard\" icon=\"feedback\" nglPillImage></ngl-icon>\n              <a href=\"javascript:void(0)\">Subscription List</a>\n            </ngl-pill>\n          </div>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <!--<a style=\"position: fixed; top: 10px\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">-->\n            <!--<button class=\"btn btn-default\" style=\"border-radius: 30px\">-->\n              <!--<span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\">-->\n\n              <!--</span>-->\n            <!--</button>-->\n          <!--</a>-->\n          <button class=\"dropdown-toggle btn btn-info\" data-toggle=\"dropdown\" *ngIf=\"userObject.length > 0\"  style=\"border-radius: 30px\">\n              <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\">\n\n              </span>\n          </button>\n          <ul class=\"dropdown-menu\" *ngIf=\"userObject.length > 0\">\n            <li role=\"separator\" class=\"divider\"></li>\n            <li onclick=\"$('#group_trigger').click()\" (click)=\"timerShift(1)\"><a href=\"#\"><span class=\"glyphicon glyphicon-th-large\"></span> My Groups</a></li>\n            <li onclick=\"$('#rep_trigger').click()\" (click)=\"timerShift(2)\"><a href=\"#\"><span class=\"glyphicon glyphicon-education\"></span> Profile</a></li>\n            <li *ngIf=\"userObject[0].account_type == 'Lecture' \" onclick=\"$('#ad_trigger').click()\" (click)=\"timerShift(3)\"><a href=\"#\"><span class=\"glyphicon glyphicon-king\"></span> Admin</a></li>\n            <li><a href=\"#\"></a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li class=\"hideme\"><a href=\"#\" ><span class=\"glyphicon glyphicon-flag\"></span> Forum Help</a></li>\n            <li class=\"hideme\" onclick=\"$('button').click(function(){$('h1, h2, .panel').toggleClass('blue');});\"><a href=\"#\" ><span class=\"glyphicon glyphicon-cog\" ></span> Settings</a></li>\n            <li (click)=\"logout()\"><a href=\"#\"><span class=\"glyphicon glyphicon-off\" aria-hidden=\"true\"></span> Sign-Out</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n<!--<div style=\" top: 50px; position: absolute\">-->\n  <!--<ngl-breadcrumbs assistiveText=\"Breadcrumbs\" class=\"slds-m-top&#45;&#45;large\" >-->\n    <!--<a *nglBreadcrumb href=\"javascript:void(0)\"><div style=\"color: white\">Home</div></a>-->\n    <!--<a *nglBreadcrumb >Support</a>-->\n    <!--<a *nglBreadcrumb >Support</a>-->\n    <!--<a *nglBreadcrumb >Support</a>-->\n  <!--</ngl-breadcrumbs>-->\n<!--</div>-->\n<div class=\"panel\" style=\"display:none; top: 50px; position: absolute; width: 100%; height: 20px; background-color: black; border-bottom: 1px solid white\" id=\"div_breadCrums\">\n  <div style=\"float: left\">\n    <span class=\"glyphicon glyphicon-home\" aria-hidden=\"true\"></span>\n    <div style=\"display: inline\" *ngFor=\"let nc of nav_crums\" (click)=\"crum_selected(nc.postId, nc.level)\"><span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span><p>{{nc.heading}}</p></div>\n  </div>\n</div>\n<style>\n\n  .blue{\n      background-color: black;\n  }\n</style>"

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
        this.nb_restToDash = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.logout_emit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.shift_timer = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clicked_crumb = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.view_profile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    // items: MenuItem[];
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.restoreToDash = function (x) {
        this.nb_restToDash.emit(x);
    };
    NavBarComponent.prototype.logout = function () {
        this.logout_emit.emit();
    };
    NavBarComponent.prototype.viewProfile = function () {
        this.view_profile.emit();
    };
    NavBarComponent.prototype.crum_selected = function (selected_crum_id, index) {
        var i = 0;
        for (; i < this.nav_crums.length; i++)
            if (selected_crum_id === this.nav_crums[i].postId) {
                break;
            }
        if (i == this.nav_crums.length) {
            // console.log("Something went nav-Search");
            // alert("Something went nav-Search");
            return;
        }
        var newPin = this.nav_crums[i];
        this.nav_crums.splice(i, this.nav_crums.length - i);
        this.clicked_crumb.emit({ postId: newPin.postId, heading: newPin.heading, level: index });
    };
    NavBarComponent.prototype.timerShift = function (i) {
        this.shift_timer.emit(i);
    };
    return NavBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "nb_comp_ids", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "userObject", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "nav_crums", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "nb_restToDash", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "logout_emit", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "shift_timer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "clicked_crumb", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NavBarComponent.prototype, "view_profile", void 0);
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, "#div_rp_tools {\n    position: absolute;\n    background-color: #BBB;\n    border: 1px solid grey;\n    border-radius: 5px;\n    display: none;\n    width: 60px;\n    height: 60px;\n    top: 32px;\n    right: 20px;\n}\n\n#btn_rec_tooltip {\n    top: 6px;\n    left: 90%;\n    position: absolute;\n    height: 25px;\n}\n\n#btn_rec_tooltip2 {\n    top: 6px;\n    left: 80%;\n    position: absolute;\n    height: 25px;\n}\n\n.banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n}\n\n.glyphicon-th:hover{\n    color: gold;\n}\n\n.tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n}\n\n.gradient-pattern {\n    /*-webkit-box-sizing: content-box;*/\n    /*-moz-box-sizing: content-box;*/\n    /*box-sizing: content-box;*/\n    /*border: none;*/\n    /*font: normal 100%/normal Arial, Helvetica, sans-serif;*/\n    /*color: rgb(255, 255, 255);*/\n    /*-o-text-overflow: clip;*/\n    /*text-overflow: clip;*/\n    /*background: -webkit-linear-gradient(63deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(63deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(0deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -webkit-linear-gradient(-90deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: -moz-linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -moz-linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background-position: 0 5px, 10px 0, 0 10px, 10px 5px, 0 0, 0 0;*/\n    /*-webkit-background-origin: padding-box;*/\n    /*background-origin: padding-box;*/\n    /*-webkit-background-clip: border-box;*/\n    /*background-clip: border-box;*/\n    /*-webkit-background-size: 20px 20px;*/\n    /*background-size: 20px 20px;*/\n}\n\n\n.gold{\n    background-image: linear-gradient(#6d94bf, #446e9b 50%, #3e648d);\n}\n\n.gold:before{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border: 1px solid rgba(242,215,12,1);\n}\n\n\n.gold:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gold:hover:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 3%,rgba(255,255,255,1) 39%,rgba(252,235,0,1) 100%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recent-posts/recent-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default col-sm-3\" id=\"recent\">\n  <div class=\"panel-heading gold\" style=\"height: 38px\">\n    <div style=\"float: right\">\n\n      <!--<button onclick=\"$('#recent').animate({top: '-150px', opacity: '0.0'}).hide(1000); \" (click)=\"addToNav('recent')\"  id=\"btn_rec_tooltip\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-resize-small\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n      <!--</button>-->\n      <!--<button onclick=\"$('#rp_searchTool').slideToggle(); $('#rp_heading').slideToggle();\" id=\"btn_rec_tooltip2\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-search\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n      <!--</button>-->\n\n    </div>\n    <div class=\"input-group\" id=\"rp_searchTool\" style=\"display: none; position: absolute\">\n\n      <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" value=\"{{search_string}}\" [(ngModel)]=\"search_string\" style=\"height: 20px; width: 200px\">\n      <span class= \"glyphicon glyphicon-search\" style=\"height: 30px; font-size: 28px\" style=\"float: left\"> </span>\n    </div>\n    <h3 id=\"rp_heading\" class=\"panel-title\"><b>Recent Posts</b></h3>\n  </div>\n  <div class=\"panel-body gradient-pattern\" id=\"x11\" style=\"font-size: 12px; width: 100%; height: 88%; overflow-y: scroll; resize: both;\">\n    <table class=\"table table-hover\">\n      <thead>\n      <tr>\n        <th>Heading</th>\n        <th>Username</th>\n        <th>Time</th>\n      </tr>\n      </thead>\n      <!--*ngFor=\"let p of rp_Posts\"-->\n      <tr *ngFor=\"let p of rp_Posts\" (click)=\"selectedSibling(p.postID, p.heading, p.level)\">\n          <td>{{p.heading}}</td>\n          <td>{{p.userID}}</td>\n          <td>{{time_ago(p.timestamp)}}</td>\n      </tr>\n      <tr *ngIf=\"(rp_Posts.length == 0)\">\n        <td>No responses to current message</td>\n      </tr>\n    </table>\n  </div>\n</div>\n<style>\n\n\n</style>\n<style>\n  .banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n  }\n  .chip {\n    display: inline-block;\n    float: right;\n    /*padding: 0 25px;*/\n    height: 30px;\n    font-size: 16px;\n    line-height: 50px;\n    border-radius: 25px;\n    background-color: #BBB;\n    padding-left: 20px;\n  }\n\n  .chip div {\n    float: right;\n    /*margin: 0 10px 0 -25px;*/\n    padding-left: 30px;\n    height: 45px;\n    width: 45px;\n    border-radius: 100%;\n    background-color: #000;\n    border: 4px solid #BBB;\n    padding-bottom: 30px;\n    padding-left: 0px;\n  }\n\n  .glyphicon-th:hover{\n    color: lawngreen;\n  }\n\n  .tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n  }\n</style>"

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

var RecentPostsComponent = (function () {
    function RecentPostsComponent() {
        this.rp_selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.rp_addToNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search_string = "";
    }
    RecentPostsComponent.prototype.ngOnInit = function () {
    };
    RecentPostsComponent.prototype.selectedSibling = function (x, heading, index) {
        this.rp_selectedItem.emit({ postId: x, heading: heading, level: index });
    };
    RecentPostsComponent.prototype.addToNav = function (comp_id) {
        this.rp_addToNav.emit(comp_id);
    };
    //Time Function
    RecentPostsComponent.prototype.time_ago = function (time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date)
                    time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'Yesterday', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'Last week', 'Next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'Last month', 'Next month'],
            [29030400, 'months', 2419200],
            [58060800, 'Last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000, token = 'ago', list_choice = 1;
        if (seconds == 0) {
            return 'Just now';
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    };
    return RecentPostsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RecentPostsComponent.prototype, "rp_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RecentPostsComponent.prototype, "rp_selectedItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RecentPostsComponent.prototype, "rp_addToNav", void 0);
RecentPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recent-posts',
        template: __webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recent-posts/recent-posts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecentPostsComponent);

//# sourceMappingURL=recent-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#rep_Profile{\n    margin-left: 40px;\n}\n#rep_gami{\n    margin-left: 40px;\n}\n\n#rep_mile{\n    margin-left: 40px;\n}\n.report_chip {\n    display: inline-block;\n    float: left;\n    /*padding: 0 25px;*/\n    height: 90px;\n    font-size: 16px;\n    line-height: 50px;\n    border-radius: 50px;\n    background-color: #BBB;\n    padding-right: 200px;\n}\n\n.report_chip div {\n    float: left;\n    /*margin: 0 10px 0 -25px;*/\n    padding-left: 30px;\n    height: 120px;\n    width: 120px;\n    border-radius: 100%;\n    background-color: #000;\n    border: 4px solid #BBB;\n    padding-bottom: 30px;\n    padding-left: 0px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"\" [(visible)]=\"display\" modal=\"modal\" width=\"900\" height=\"600\">\n  <div class=\"btn-group-vertical\" style=\"width: 300px; height: 500px; border: 1px solid #DDD; display: inline-block\" onclick=\"\">\n    <a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(1)\">Profile</a>\n    <a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(5)\">Statistics</a>\n    <a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(2)\" class=\"hideme\">Subscriptions</a>\n    <a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(3)\">Gamification</a>\n    <a href=\"#\" class=\"btn btn-info\" (click)=\"getReports(4)\" class=\"hideme\">Milestones</a>\n  </div>\n  <div class=\"panel panel-info\" style=\"width: 550px; height: 500px; border: 1px solid black; display: inline-block; position: absolute; right: 10px\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{panel_heading}}</h3>\n    </div>\n    <div class=\"panel-body\" style=\"overflow-y:scroll; height: 90%\">\n\n      <div id=\"rep_profile\" class=\"stat_frame\">\n        <div class=\"list-group\" *ngIf=\"userObject.length > 0\">\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\"> Buzz pseodoname: </h4>\n            <p class=\"list-group-item-text\">{{userObject[0].pseodoname}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\"> Username: </h4>\n            <p class=\"list-group-item-text\">{{userObject[0].title}} {{userObject[0].initials}} {{userObject[0].surname}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">Account type: </h4>\n            <p class=\"list-group-item-text\">{{userObject[0].account_type}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">E-mail: </h4>\n            <p class=\"list-group-item-text\">{{userObject[0].email}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\" *ngIf=\"userObject.length > 0\">\n            <h4 class=\"list-group-item-heading\">Registered Modules: </h4>\n            <li *ngFor=\"let p of userObject[0].modules\" class=\"list-group-item\">{{p}}</li>\n          </a>\n          <a href=\"#\" class=\"list-group-item\" *ngIf=\"userObject.length > 0\">\n            <h4 class=\"list-group-item-heading\">Groups Joined: </h4>\n            <li *ngFor=\"let p of userObject[0].groupsJoinedTo\" class=\"list-group-item\">{{p}}</li>\n          </a>\n        </div>\n      </div>\n\n        <div id=\"rep_gami2\" class=\"stat_frame\" style=\"display:none \" *ngIf=\"repo_stats && userRank\">\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">Current Rank: </h4>\n            <p class=\"list-group-item-text\">{{userRank.desc}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">Points: </h4>\n            <p class=\"list-group-item-text\">{{repo_stats.points}}</p>\n          </a>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">Bounty: </h4>\n            <p class=\"list-group-item-text\">{{repo_stats.bounty}}</p>\n          </a>\n          <div class=\"progress progress-striped active\" >\n            <div class=\"progress-bar progress-bar-success\" id=\"div_progressBar\" style=\"width: {{repo_stats.points}}%\"></div>\n          </div>\n          <a href=\"#\" class=\"list-group-item\">\n            <h4 class=\"list-group-item-heading\">Points to Next Level: </h4>\n            <p class=\"list-group-item-text\">{{userRank.goal - repo_stats.points}}</p>\n          </a>\n\n        </div>\n      <!--//https://stackoverflow.com/questions/43530096/calling-javascript-function-from-typescript-angular-2-->\n      <div id=\"rep_mile\" style=\"display:none;\" class=\"stat_frame\">\n        <button class=\"btn btn-warning\">Get Five Likes</button>\n        <button class=\"btn btn-warning\">Start a new thread</button>\n        <button class=\"btn btn-warning\">Participate in new discussion quiz</button>\n      </div>\n      <div id=\"rep_subs\" style=\"display:none;\" class=\"stat_frame\">\n        <h2>No current subscriptions</h2>\n      </div>\n      <div id=\"rep_stats\" style=\"display:none;\" class=\"stat_frame\" *ngIf=\"tbl_format.dataNumOfVotes.length > 0\">\n        <p-chart  type=\"bar\" [data]=\"data\"></p-chart>\n        <!--{{tbl_format | json}}-->\n        <!--<br>-->\n        <!--{{dummy_Adaptor | json}}-->\n        <!--<br>-->\n        <!--{{data.datasets | json}}-->\n      </div>\n      <!--</div>-->\n    </div>\n  </div>\n</p-dialog>\n\n\n<button type=\"text\" id=\"rep_trigger\" (click)=\"showDialog()\" icon=\"fa-external-link-square\" label=\"Show\" style=\"display:none\">Show</button>"

/***/ }),

/***/ "../../../../../src/app/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mediator_service__ = __webpack_require__("../../../../../src/app/mediator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kontroller_service__ = __webpack_require__("../../../../../src/app/kontroller.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = (function () {
    function ReportsComponent(_kontrolService, _mediatorService) {
        this._kontrolService = _kontrolService;
        this._mediatorService = _mediatorService;
        // @Input() rep_dia_display;
        // @Input() display;
        // currentOutFit = "H1U1B1.png";
        // Hair_val = 1;
        // Upper_val = 1;
        // Bottom_val = 1;
        this.display = false;
        this.panel_heading = "Profile";
        this.repo_stats = null;
        this.dummy_Adaptor = [];
        this.userRank = null;
        this.gami_stats = [];
        this.transition_stats = { "modules": [], "dataNumOfPosts": [], "dataNumOfVotes": [] };
        this.tbl_format = { "modules": [], "dataNumOfPosts": [], "dataNumOfVotes": [] };
        this.data = {
            labels: this.tbl_format.modules,
            datasets: [
                {
                    label: 'Posts',
                    backgroundColor: '#2FFFF5',
                    data: this.tbl_format.dataNumOfPosts
                },
                {
                    label: 'Votes',
                    backgroundColor: '#42A5F5',
                    data: this.tbl_format.dataNumOfVotes
                }
            ]
        };
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'bottom'
            }
        };
    }
    ReportsComponent.prototype.showDialog = function () {
        this.display = true;
    };
    ReportsComponent.prototype.getReports = function (x) {
        switch (x) {
            case 1:
                this.panel_heading = 'Profile';
                document.getElementById("rep_profile").style.display = "block";
                document.getElementById("rep_gami2").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                break;
            case 2:
                this.panel_heading = 'Subscriptions';
                document.getElementById("rep_subs").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_gami2").style.display = "none";
                break;
            case 3:
                this.panel_heading = 'Gamification';
                document.getElementById("rep_gami2").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                break;
            case 4:
                this.panel_heading = 'MileStones';
                document.getElementById("rep_mile").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_gami2").style.display = "none";
                document.getElementById("rep_stats").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                break;
            case 5:
                this.panel_heading = 'Statistics';
                document.getElementById("rep_stats").style.display = "block";
                document.getElementById("rep_profile").style.display = "none";
                document.getElementById("rep_subs").style.display = "none";
                document.getElementById("rep_mile").style.display = "none";
                document.getElementById("rep_gami2").style.display = "none";
                break;
        }
    };
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            _this.refresh_MyReports();
        }, 6000);
    };
    ReportsComponent.prototype.refresh_MyReports = function () {
        if (this.display == true) {
            this.statsPerModule();
            this.rep_gami_stats();
        }
        if (!sessionStorage.getItem("sessionID")) {
            this.repo_stats = null;
            this.display = false;
        }
    };
    ReportsComponent.prototype.rep_gami_stats = function () {
        var _this = this;
        this._kontrolService.getUserPoints(sessionStorage.getItem("sessionID"))
            .then(function (repo_stats) { _this.repo_stats = repo_stats; _this.calculateLevel(); })
            .catch(function (err) { return console.log(err); });
    };
    ReportsComponent.prototype.calculateLevel = function () {
        var ranking = [{ goal: 50, desc: "Const Variable" }, { goal: 100, desc: "Dynamic Variable" }, { goal: 200, desc: "Structure" }, { goal: 400, desc: "Class" }, { goal: 1000, desc: "Language" }];
        var max_index = 0;
        for (var i = 0; i < ranking.length; i++)
            if (this.repo_stats.points >= ranking[i].goal) {
                max_index = i;
            }
        this.userRank = ranking[max_index];
        this.userRank.goal *= 2;
        var ratio = (this.repo_stats.points / this.userRank.goal) * 100;
        document.getElementById("div_progressBar").style.width = ratio.toString() + "%";
    };
    ReportsComponent.prototype.statsPerModule = function () {
        var _this = this;
        // let min = 0;
        // while ( min < this.dummy_Adaptor.length)
        // {
        //     this.dummy_Adaptor.pop();
        // }
        this.dummy_Adaptor = [];
        if (this.userObject.length > 0) 
        // for (let i = 0; i < this.userObject.modules.length; i++ )
        {
            this._kontrolService.attempt(sessionStorage.getItem("sessionID"))
                .then(function (dummy_Adaptor) {
                _this.dummy_Adaptor = dummy_Adaptor;
                _this.toTableFormat();
            })
                .catch(function (err) { return console.log(err); });
        }
    };
    //[[{"numPosts":0,"module":"Buzz"},{"numPosts":4,"module":"COS121"}]
    // ,[{"numVotes":0,"module":"Buzz"},{"numVotes":1,"module":"COS121"}]]
    ReportsComponent.prototype.toTableFormat = function () {
        if (this.dummy_Adaptor.length == 0)
            return;
        for (var i = 0; 0 < this.tbl_format.modules.length; i++)
            this.transition_stats.modules.pop();
        for (var i = 0; 0 < this.tbl_format.dataNumOfPosts.length; i++)
            this.transition_stats.dataNumOfPosts.pop();
        for (var i = 0; 0 < this.tbl_format.dataNumOfVotes.length; i++)
            this.transition_stats.dataNumOfVotes.pop();
        for (var i = 0; i < this.dummy_Adaptor[0].length; i++) {
            this.transition_stats.modules.push(this.dummy_Adaptor[0][i].module);
            this.transition_stats.dataNumOfPosts.push(this.dummy_Adaptor[0][i].numPosts);
            this.transition_stats.dataNumOfVotes.push(this.dummy_Adaptor[1][i].numVotes);
        }
        this.tbl_format.modules = this.transition_stats.modules;
        this.tbl_format.dataNumOfPosts = this.transition_stats.dataNumOfPosts;
        this.tbl_format.dataNumOfVotes = this.transition_stats.dataNumOfVotes;
        // for (let i = 0; i < this.dummy_Adaptor[0].length; i++) {
        // this.data.datasets[0].data =this.tbl_format.dataNumOfPosts;
        // this.data.labels =this.tbl_format.modules;
        // this.data.datasets[1].data =this.tbl_format.dataNumOfVotes;
        this.data = {
            labels: this.tbl_format.modules,
            datasets: [
                {
                    label: 'Posts',
                    backgroundColor: '#2FFFF5',
                    data: this.tbl_format.dataNumOfPosts
                },
                {
                    label: 'Votes',
                    backgroundColor: '#42A5F5',
                    data: this.tbl_format.dataNumOfVotes
                }
            ]
        };
        // }
    };
    return ReportsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReportsComponent.prototype, "userObject", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ReportsComponent.prototype, "sm_moduleName", void 0);
ReportsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__("../../../../../src/app/reports/reports.component.html"),
        styles: [__webpack_require__("../../../../../src/app/reports/reports.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__kontroller_service__["a" /* KontrollerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__kontroller_service__["a" /* KontrollerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__mediator_service__["a" /* MediatorService */]) === "function" && _b || Object])
], ReportsComponent);

var _a, _b;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/sibling-posts/sibling-posts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#div_sp_tools {\n    position: absolute;\n    background-color: #BBB;\n    border: 1px solid grey;\n    border-radius: 5px;\n    display: none;\n    width: 60px;\n    height: 60px;\n    top: 32px;\n    right: 20px;\n}\n\n#btn_sp_tooltip {\n    top: 6px;\n    left: 90%;\n    position: absolute;\n    height: 25px;\n}\n\n\n#btn_sp_tooltip2 {\n    top: 6px;\n    left: 80%;\n    position: absolute;\n    height: 25px;\n}\n\n.banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n}\n\n.glyphicon-th:hover{\n    color: lawngreen;\n}\n\n.tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n}\n\n.gold{\n    background-image: linear-gradient(#6d94bf, #446e9b 50%, #3e648d);\n}\n\n.gold:before{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border: 1px solid rgba(242,215,12,1);\n}\n\n\n.gold:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gold:hover:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 3%,rgba(255,255,255,1) 39%,rgba(252,235,0,1) 100%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gradient-pattern {\n    /*background-image: url(\"../../assets/marble.jpg\");*/\n}\n\n.gradient-text {\n    display: inline-block;\n    box-sizing: content-box;\n    border: none;\n    font: normal 20px/1 \"Aladin\", Helvetica, sans-serif;\n    color: rgba(48,48,48,1);\n    text-align: center;\n    text-transform: normal;\n    text-overflow: clip;\n    white-space: pre;\n    text-shadow: 1px 1px 0 rgba(140,140,140,0.6) , -1px -1px 1px rgba(0,0,0,0.67) ;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sibling-posts/sibling-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" id=\"sibb\">\n  <div class=\"panel-heading gold\" style=\"color: black ; height: 38px\">\n    <div style=\"float: right\">\n\n        <!--<button onclick=\"$('#sibb').animate({top: '-190px', opacity: '0.0'}).hide(1000); $('#div_sp_tools').slideToggle();\" (click)=\"addToNav('sibb')\"   id=\"btn_sp_tooltip\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-resize-small\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n        <!--</button>-->\n        <!--<button onclick=\"$('#sp_searchTool').slideToggle(); $('#sp_heading').slideToggle();\" id=\"btn_sp_tooltip2\" class=\"btn btn-default\" type=\"button\" style=\" \"><span class=\"glyphicon glyphicon-search\" style=\"top: 4px; left: 6px; position: absolute;\" onclick=\"\"></span>-->\n        <!--</button>-->\n    </div>\n      <div class=\"input-group\" id=\"sp_searchTool\" style=\"display: none; position: absolute\">\n          <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" value=\"{{search_string}}\" [(ngModel)]=\"search_string\" style=\"height: 15px; width: 200px; margin-bottom: 0px; \">\n          <span class= \"glyphicon glyphicon-search\" style=\"\" style=\"float: left\"> </span>\n      </div>\n      <h3 id=\"sp_heading\" class=\"panel-title \"><b>Related - Posts</b></h3>\n  </div>\n  <div class=\"panel-body gradient-pattern \" id=\"x17\" style=\"font-size: 12px; height:76%; overflow-y: auto; color: black\">\n      <table class=\"table table-hover\">\n          <thead>\n          <tr>\n              <th>Heading</th>\n              <th>Username</th>\n              <th>Time</th>\n          </tr>\n          </thead>\n          <!--*ngFor=\"let p of rp_Posts\"-->\n          <tr *ngFor=\"let p of sp_Posts\" (click)=\"selectedSibling(p.postID,p.heading, p.level)\">\n              <td>{{p.heading}}</td>\n              <td>{{p.userID}}</td>\n              <td>{{time_ago(p.timestamp)}}</td>\n          </tr>\n          <tr *ngIf=\"(sp_Posts.length == 0)\">\n              <td>No responses to current message</td>\n          </tr>\n      </table>\n  </div>\n</div>\n\n<style>\n\n\n</style>"

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
        this.sp_selectedItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sp_addToNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.search_string = "";
    }
    SiblingPostsComponent.prototype.ngOnInit = function () {
        //alert('sibling');
    };
    SiblingPostsComponent.prototype.createNewPost = function (x) {
    };
    SiblingPostsComponent.prototype.addToNav = function (comp_id) {
        this.sp_addToNav.emit(comp_id);
    };
    SiblingPostsComponent.prototype.selectedSibling = function (postToDelete, heading, level) {
        this.sp_selectedItem.emit({ postId: postToDelete, heading: heading, level: level });
    };
    //Time Function
    SiblingPostsComponent.prototype.time_ago = function (time) {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date)
                    time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1],
            [120, '1 minute ago', '1 minute from now'],
            [3600, 'minutes', 60],
            [7200, '1 hour ago', '1 hour from now'],
            [86400, 'hours', 3600],
            [172800, 'Yesterday', 'Tomorrow'],
            [604800, 'days', 86400],
            [1209600, 'Last week', 'Next week'],
            [2419200, 'weeks', 604800],
            [4838400, 'Last month', 'Next month'],
            [29030400, 'months', 2419200],
            [58060800, 'Last year', 'Next year'],
            [2903040000, 'years', 29030400],
            [5806080000, 'Last century', 'Next century'],
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000, token = 'ago', list_choice = 1;
        if (seconds == 0) {
            return 'Just now';
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0, format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time;
    };
    return SiblingPostsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "buzz_siblings", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "buzz_message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "user_name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "sp_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "sp_selectedItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SiblingPostsComponent.prototype, "sp_addToNav", void 0);
SiblingPostsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
exports.push([module.i, ".enjoy-css {\n    /*-webkit-box-sizing: content-box;*/\n    /*-moz-box-sizing: content-box;*/\n    /*box-sizing: content-box;*/\n    /*border: none;*/\n    /*font: normal 100%/normal Arial, Helvetica, sans-serif;*/\n    /*color: rgb(255, 255, 255);*/\n    /*-o-text-overflow: clip;*/\n    /*text-overflow: clip;*/\n    /*background: -webkit-linear-gradient(63deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(63deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(-117deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -webkit-linear-gradient(0deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -webkit-linear-gradient(-90deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: -moz-linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), -moz-linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), -moz-linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background: linear-gradient(27deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(21,21,21) 5px, rgba(0,0,0,0) 5px), linear-gradient(27deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(207deg, rgb(34,34,34) 5px, rgba(0,0,0,0) 5px), linear-gradient(90deg, rgb(27,27,27) 10px, rgba(0,0,0,0) 10px), linear-gradient(180deg, rgb(29,29,29) 25%, rgb(26,26,26) 25%, rgb(26,26,26) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgb(36,36,36) 75%, rgb(36,36,36) 100%), rgb(19, 19, 19);*/\n    /*background-position: 0 5px, 10px 0, 0 10px, 10px 5px, 0 0, 0 0;*/\n    /*-webkit-background-origin: padding-box;*/\n    /*background-origin: padding-box;*/\n    /*-webkit-background-clip: border-box;*/\n    /*background-clip: border-box;*/\n    /*-webkit-background-size: 20px 20px;*/\n    /*background-size: 20px 20px;*/\n    /*background-image: url(\"../../assets/marble.jpg\");*/\n    /*-webkit-background-size: cover;*/\n    /*-moz-background-size: cover;*/\n    /*-o-background-size: cover;*/\n    /*background-size: cover;*/\n}\n\n.gold{\n    background-image: linear-gradient(#6d94bf, #446e9b 50%, #3e648d);\n}\n\n.gold:before{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border: 1px solid rgba(242,215,12,1);\n}\n\n\n.gold:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 0%,rgba(255,255,255,1) 56%,rgba(252,235,0,1) 96%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n.gold:hover:after{\n    background: linear-gradient(45deg,  rgba(242,215,12,1) 3%,rgba(255,255,255,1) 39%,rgba(252,235,0,1) 100%);\n    border-top: 1px solid rgba(255,255,255,0.3);\n    border-left: 1px solid rgba(255,255,255,0.3);\n    border-bottom: 1px solid rgba(242,215,12,0.3);\n    border-right: 1px solid rgba(242,215,12,0.3);\n    box-shadow: inset 0px 0px 2px 2px rgba(150, 150, 150, .05);\n}\n\n#btn_sm_courses {\n    top: 6px;\n    left: 94%;\n    position: absolute;\n    height: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default col-sm-3\" id=\"side\">\n  <div class=\"panel-heading gold\" style=\" color: black \">\n    <div class=\"dropdown\" style=\" margin-right: 60px; position: absolute; right: 50px; top: 0px\">\n      <button id=\"btn_sm_courses\" class=\"btn btn-default dropdown-toggle\" style=\"float: right;  \" type=\"button\" data-toggle=\"dropdown\">{{sm_moduleName}}\n        <span class=\"caret\"></span></button>\n      <ul class=\"dropdown-menu\" *ngIf=\"userObject.length > 0\" style=\"margin-top: 30px\">\n        <li class=\"dropdown-header\">Your Modules</li>\n        <li *ngFor=\"let p of userObject[0].modules\" (click)=\"sm_seleceted_newModule(p)\"><a href=\"#\">{{p}}</a></li>\n      </ul>\n    </div>\n    <h3 class=\"panel-title\"><b>Menu</b></h3>\n  </div>\n\n  <div class=\"panel-body\" style=\"font-size: 12px; width:200px; height:90%; color: #333\">\n    <div style=\" height:80%; overflow-y:auto; width: 200px\">\n      <div  *ngFor=\"let p1 of sm_Posts\" style=\"padding-left: +0px\"  >\n        <div >\n          <button onclick=\"$(this).parent().children().toggle(); $(this).show()\" type=\"button\" class=\"btn btn-default\" style=\"height:30px; margin-top: 9px; width: 90%\" (click)=\" selectedItem(p1.postID,p1.heading)\">{{p1.heading}}</button>\n        </div>\n      </div>\n      <div>\n\n      </div>\n    </div>\n    <br>\n    <hr>\n    <button type=\"button\" style=\"width: 90%\" class=\"btn btn-success\" onclick=\"document.getElementById('txt2').style.display = 'none'; document.getElementById('div_main').style.display = 'inline'; document.getElementById('txt1').style.display = 'inline';\" data-toggle=\"modal\" data-target=\"#myModalHorizontal\">Create Thread</button>\n\n\n  </div>\n</div>\n\n<style>\n  .divNaviItem:hover{\n    color: blue;\n    cursor: pointer;\n  }\n\n  #divNavi{\n    /*background-color: #bbb;*/\n    font-size: 14px;\n  }\n\n  .badge {\n    font-size: 8px;\n    background-color: black;\n  }\n\n  .divModule{\n    background-color: #999;\n    color: #EEE;\n    font-size: 20px;\n    padding-left: 10px;\n  }\n\n  .folder{\n    color: sandybrown;\n  }\n\n  .buttondemoBasicUsage section {\n    background: #f7f7f7;\n    border-radius: 3px;\n    text-align: center;\n    margin: 1em;\n    position: relative !important;\n    padding-bottom: 10px; }\n\n  .buttondemoBasicUsage md-content {\n    margin-right: 7px; }\n\n  .buttondemoBasicUsage section .md-button {\n    margin-top: 16px;\n    margin-bottom: 16px; }\n\n  .buttondemoBasicUsage .label {\n    position: absolute;\n    bottom: 5px;\n    left: 7px;\n    font-size: 14px;\n    opacity: 0.54; }\n</style>\n\n"

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
        this.selectedMenuItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.loadedFirst = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selecetedModule = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    };
    SideMenuComponent.prototype.idk = function () {
    };
    SideMenuComponent.prototype.selectedItem = function (choosenId, heading) {
        this.selectedMenuItem.emit({ postId: choosenId, heading: heading });
    };
    SideMenuComponent.prototype.sm_seleceted_newModule = function (p) {
        this.sm_moduleName = p;
        this.selecetedModule.emit(p);
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "sm_Posts", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "userObject", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "sm_moduleName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "selectedMenuItem", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "loadedFirst", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SideMenuComponent.prototype, "selecetedModule", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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

module.exports = "<div class=\"panel panel-default\" id=\"subs\" >\n  <div class=\"panel-heading\" style=\"background: #333; color: white \">\n    <div style=\"float: right\">\n      <button onclick=\"$('#div_sl_tools').slideToggle();\" class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-th \" style=\"float: right\" onclick=\"\"></span>\n      </button>\n      <div id=\"div_sl_tools\" onclick=\"$('#div_sl_tools').slideToggle();\" class=\"wall\" style=\"position: fixed; background-color: #BBB; border: 1px solid grey; border-radius: 5px; display: none; width: 60px; height: 60px; \">\n        <div class=\"tools\" onclick=\"$('#x10').toggle();\" style=\"float: right; height: 30px; width: 30px; border: 1px solid darkgrey; border-radius: 5px; \">\n          <span class=\"glyphicon glyphicon-pushpin\" style=\"float: right\" onclick=\"\"></span>\n        </div>\n        <div  class=\"tools\" style=\"height: 30px; width: 30px; border: 1px solid darkgrey; border-radius: 5px; \">\n          <span class=\"glyphicon glyphicon-search\" style=\"font-size: 20px\"></span>\n        </div>\n        <div class=\"tools\" onclick=\"$('#subs').animate({top: '-150px', opacity: '0.0'}).hide(1000); \" (click)=\"addToNav('subs')\" style=\"height: 30px; width: 30px; border: 1px solid darkgrey; border-radius: 5px; \">\n          <span class=\"\tglyphicon glyphicon-resize-small\" style=\"font-size: 20px\"></span>\n        </div>\n\n      </div>\n    </div>\n    <h3 class=\"panel-title\" >Subscription List</h3>\n  </div>\n  <div class=\"panel-body\" id=\"x10\">\n    No current subscriptions\n  </div>\n</div>\n\n<style>\n\n  .banana2:hover{\n    background: greenyellow;\n    cursor:pointer;\n  }\n\n  .glyphicon-th:hover{\n    color: lawngreen;\n  }\n\n  .tools:hover{\n    color: white;\n    background-color: black;\n    background: black;\n    cursor:pointer;\n  }\n</style>"

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
        this.sl_addToNav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SubsListComponent.prototype.ngOnInit = function () {
    };
    SubsListComponent.prototype.addToNav = function (comp_id) {
        this.sl_addToNav.emit(comp_id);
    };
    return SubsListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SubsListComponent.prototype, "sl_addToNav", void 0);
SubsListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subs-list',
        template: __webpack_require__("../../../../../src/app/subs-list/subs-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/subs-list/subs-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubsListComponent);

//# sourceMappingURL=subs-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validate_service__ = __webpack_require__("../../../../../src/app/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__ = __webpack_require__("../../../../ngx-flash-messages/lib-dist/flash-messages.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserComponent = (function () {
    function UserComponent(validateService, flash, atho, route, http) {
        this.validateService = validateService;
        this.flash = flash;
        this.atho = atho;
        this.route = route;
        this.http = http;
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onRegisterSubmit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["a" /* FlashMessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_flash_messages__["a" /* FlashMessagesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _e || Object])
], UserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/**
 * Created by nkosinathi on 2017/08/05.
 */
var User = (function () {
    function User(userID, initials, name, surname, email, cell, modules, pseodoname, title) {
        this.userID = userID;
        this.initials = initials;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.cell = cell;
        this.modules = modules;
        this.pseodoname = pseodoname;
        this.title = title;
    }
    User.prototype.startUP = function (user) {
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/assets/img_avatar1.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img_avatar1.cec4ccb30e41198c7b0a.png";

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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
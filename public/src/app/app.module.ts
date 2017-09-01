import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { MediatorService } from './mediator.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { CommentsComponent } from './comments/comments.component';
import { SubsListComponent } from './subs-list/subs-list.component';
import { SiblingPostsComponent } from './sibling-posts/sibling-posts.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
// import {NglModule} from 'ng-lightning';

import { NglModule } from 'ng-lightning';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { MessagesComponent } from './messages/messages.component';
import { LandingComponent } from './landing/landing.component';
// import { Messages2Component } from './src/app/messages2/messages2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SideMenuComponent,
    StatusBarComponent,
    CommentsComponent,
    SubsListComponent,
    SiblingPostsComponent,
    RecentPostsComponent,
    NavBarComponent,
    MessagesComponent,
    LandingComponent,
    // Messages2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      NglModule,
  ],
  providers: [
      MediatorService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }

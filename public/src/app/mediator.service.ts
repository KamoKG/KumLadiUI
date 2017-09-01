import { Injectable } from '@angular/core';
// import {CPU} from "./cpu";

import {Http, RequestOptions, Request, RequestMethod, Headers} from "@angular/http";
import "rxjs";
import {Observable} from "rxjs";
import {Post} from "./post";
@Injectable()
export class MediatorService {


  constructor(private _http: Http) { }

  createPost(x: Post){
        console.log("CALLED CREATE POST");
        return this._http.get("http://localhost:3000/xxxx")
            .map(data => data.json())
            .toPromise();
    }

    getLevelZeros(x: String){
        console.log("CALLED GET LEVEL ONES");
        return this._http.get("http://localhost:3000/getAllPosts/"+x)
            .map(data => data.json().data)
            .toPromise();
    }

    getChildPosts(x: String){
        console.log("CALLED GET CHILDREN of "+x);
        return this._http.get("http://localhost:3000/getChildPosts/"+x)
            .map(data => data.json().data)
            .toPromise();
    }

    getContent(x: String){
        console.log("CALLED GET CONTENT of "+x);
        return this._http.get("http://localhost:3000/getContent/"+x)
            .map(data => data.json())
            .toPromise();
    }

    getPosts(){
        // let authToken = localStorage.getItem('auth_token');
        // let headers = new Headers({"Accept":"application/json"});
        // headers.append('Authorization','Bearer ${authToken}');
        // let options = new RequestOptions({headers:headers});

        // return this._http.get("http://localhost:1337/posts")
        //     .map(data => data.json())
        //     .toPromise();
    }

  // getChildren(): Observable<CPU>{
  //   return
  // }
}

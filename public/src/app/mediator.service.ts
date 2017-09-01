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
	 var authtoken = localStorage.getItem('auth_token');
	 var headers = new Headers({'Accept':'application/json'});
	 headers.append('Authorization', 'Bearer ${authToken}');
	 var options = new RequestOptions({headers: headers});
        return this._http.get("/xxxx", options)
            .map(data => data.json())
            .toPromise();
    }

    getLevelZeros(x: String){
        console.log("CALLED GET LEVEL ONES");
	 var authtoken = localStorage.getItem('auth_token');
	 var headers = new Headers({'Accept':'application/json'});
	 headers.append('Authorization', 'Bearer ${authToken}');
	 var options = new RequestOptions({headers: headers});
        return this._http.get("/getAllPosts/"+x, options)
            .map(data => data.json().data)
            .toPromise();
    }

    getChildPosts(x: String){
        console.log("CALLED GET CHILDREN of "+x);
	 var authtoken = localStorage.getItem('auth_token');
	 var headers = new Headers({'Accept':'application/json'});
	 headers.append('Authorization', 'Bearer ${authToken}');
	 var options = new RequestOptions({headers: headers});
        return this._http.get("/getChildPosts/"+x, options)
            .map(data => data.json().data)
            .toPromise();
    }

    getContent(x: String){
        console.log("CALLED GET CONTENT of "+x);
	var authtoken = localStorage.getItem('auth_token');
	 var headers = new Headers({'Accept':'application/json'});
	 headers.append('Authorization', 'Bearer ${authToken}');
	 var options = new RequestOptions({headers: headers});
        return this._http.get("/getContent/"+x, options)
            .map(data => data.json())
            .toPromise();
    }
}

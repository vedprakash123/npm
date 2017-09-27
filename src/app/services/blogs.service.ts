import { Injectable } from '@angular/core';
import { AppService } from "./app.service";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Headers, Response, RequestOptions} from "@angular/http";

@Injectable()
export class BlogsService {

  constructor( private appService: AppService) { }

  getPosts(per):Observable<any> {
  	let pg = '/api/blogs?page='+per;
  	console.log("PG: ", pg);
  	return this.appService.get(pg).map(res => res.json()).catch(err => Observable.throw(err))
  }

  getPost(bid):Observable<any> {
  	const ids = '/api/blog/'+bid;
  	return this.appService.get(ids).map(res => res.json()).catch(err => Observable.throw(err))
  }

  // Create Resouce
  createBlog(modal): Observable<any>{
    let url = "/entity/node";
    let headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append("Authorization", "Basic YWRtaW46YWRtaW4=");
    let options = new RequestOptions({ headers: headers });
    console.log("Modal: ",modal);
    let body = JSON.stringify({
      "type":[{"target_id":"page"}],
      "title":[{"value": modal.name}],
      "body":[{"value": modal.alterEgo}],
      "field_cust":[{"value": modal.power}]
    });
    return this.appService.post(url, body, options).map((res: Response) => res.json()).catch(err => Observable.throw(err))
  }
  // Update Resource
  updateBlog(idd): Observable<any>{
    let url = "/node/"+idd;
    let headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append("Authorization", "Basic YWRtaW46YWRtaW4=");
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({
      "nid":[{"value":idd}],
      "type":[{"target_id":"page"}],
      "title":[{"value":"Hello Worldpp"}],
      "body":[{"value":"How are you?ppp"}],
      "field_cust":[{"value":"pas cus field valueppp"}]
    });
    return this.appService.patch(url, body, options).map((res: Response) => res.json()).catch(err => Observable.throw(err))
  }

    // Update Resource
  deleteBlog(idd): Observable<any>{
    let url = "/node/"+idd;
    let headers = new Headers({ 'Content-Type': 'application/json'});
    headers.append("Authorization", "Basic YWRtaW46YWRtaW4=");
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({
      "type":[{"target_id":"page"}],
    });
    return this.appService.delete(url, options).map((res: Response) => res.json()).catch(err => Observable.throw(err))
  }

}

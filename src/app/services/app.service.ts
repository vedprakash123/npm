import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, Response, Headers} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private serverURL: string = "http://angular.local.com";
  private headers: Headers = new Headers(
    {
      "Content-Type": "application/json"
	}
  );

  constructor(private http: Http) { }

  getURL(url: string): string {
  	return this.serverURL + url;
  }
  getOptions(options: RequestOptionsArgs): RequestOptionsArgs {
  	let op = {headers: this.headers};
  	if(options) {
  		return Object.assign(op, options);
  	}
  	return op;
  	
  }

  // Fetch Resource
  get(endpoint: string, options?: RequestOptionsArgs): Observable<Response> {
  	let url = this.getURL(endpoint);
  	let op = this.getOptions(options);

  	return this.http.get(url, options);
  }

  // Create Resource
  post(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    let url = this.getURL(endpoint);
    let op = this.getOptions(options);
    
    return this.http.post(url, body, options);
  }

  // Update Resource
  patch(endpoint: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    let url = this.getURL(endpoint);
    let op = this.getOptions(options);
    console.log();
    return this.http.patch(url, body, options);
  }

  // Fetch Resource
  delete(endpoint: string, options?: RequestOptionsArgs): Observable<Response> {
    let url = this.getURL(endpoint);
    let op = this.getOptions(options);

    return this.http.delete(url, options);
  }

}
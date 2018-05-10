import {Http, URLSearchParams, Headers} from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  apiRoot: string = "http://localhost:9985/ratp/";
  headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin' , '*');
    this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    this.headers.append('Accept','application/json');
    this.headers.append('content-type','application/json');
  }

  setApiurl(url:string) {
    this.apiRoot += url;
  }

  doGET(paramsName: Array<string>, paramsValue: Array<any>): Observable<any> {
    let url = `${this.apiRoot}`;
    let search = new URLSearchParams();
    paramsName.forEach((name,index) => {
      search.set(name, paramsValue[index]);
    });
    this.http.get(url).subscribe(
      res => console.log(res.json()),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)

      
  );

  return this.http.get(url) 
      .map(res => { 
        return res.json().results.map(item => { 
          return new SearchItem( 
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
          );
        });
      });
  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo', 'moo');
    // search.set('limit', 25);
    this.http.post(url, {moo: "foo", goo: "loo"}, {search}).subscribe(res => console.log(res.json()));
  }
}

import {Http, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

export class ApiService {
  apiRoot: string = "";

  constructor(private http: Http) {
  }

  setApiurl(url:string) {
    this.apiRoot = url;
  }

  doGET(paramsName: Array<string>, paramsValue: Array<any>) {
    let url = `${this.apiRoot}`;
    let search = new URLSearchParams();
    paramsName.forEach((name,index) => {
      search.set(name, paramsValue[index]);
    });
    this.http.get(url, {search}).subscribe(res => console.log(res.json()));
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

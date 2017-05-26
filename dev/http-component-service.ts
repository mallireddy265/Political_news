/**
 * Created by ANKIOM on 5/5/2017.
 */
import {Injectable} from "angular2/core"
import {Http} from "angular2/http"
import {Directive} from 'angular2/core';
import 'rxjs/add/operator/map'

@Injectable()

@Directive({
  selector: '[MyComponent]'
})

export class HttpTestService {
   constructor(private _http: Http){}
   getNewsData(){
     return this._http.get("http://scsserver.alipsys.in:3010/api/apscs/getnews/").map(res => res.json());
   }
}

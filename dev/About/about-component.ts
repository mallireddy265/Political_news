/**
 * Created by ANKIOM on 5/24/2017.
 */
import {Component} from 'angular2/core'
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector: 'about',
  templateUrl: './dev/About/about.html',
  directives: [ROUTER_DIRECTIVES]
  }
)
export class aboutControl {
    title = 'This is about page';
    constructor(private _router: Router){
      this._router.navigate(['AboutArea'])
    }
}

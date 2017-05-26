import {Component} from "angular2/core"
import {Router, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
  selector:'login-form',
  templateUrl:'./dev/loginForm.html',
  directives : [ROUTER_DIRECTIVES]
})

export class LoginComponent {
  data = {};
  constructor(private _router: Router) {}
  loginClick() {
    var uname = this.data.username;
    var pwd = this.data.password;
    var key = btoa(btoa(uname) + '??' + atob(pwd));
    console.log(key);
    console.log(this.data);
    if(uname == "mallireddy" && pwd == "ankiom") {
      this._router.navigate(['AdminArea']);
      // <a [routerLink]="['AdminArea']"></a>
      console.log("hello mallireddy");
    }else {
      console.log("Who are you man?");
      alert("Hello your username or password is incorrect");
    }
  }
}


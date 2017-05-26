import {Component} from 'angular2/core';
import {LoginComponent} from "./app.login-form";
import {adminControl} from "./app.admin";
import {RouteConfig,ROUTER_DIRECTIVES} from "angular2/router";
import {HttpTestService} from "./http-component-service";
import {aboutControl} from "./About/about-component";
import {UIRouterModule} from "ui-router-ng2";


@Component({
    selector: 'my-app',
    template: `<div class="main">
      <router-outlet></router-outlet>
      <!--<admin-form></admin-form>-->
    </div>`,
    directives: [LoginComponent,adminControl,ROUTER_DIRECTIVES,HttpTestService,aboutControl]
})
@RouteConfig([
  {
    path: '/',
    component: LoginComponent,
    name: 'LogIn'
  },
  {
    path: '/home',
    component: adminControl,
    name: 'AdminArea'
  },
  {
    path: '/about',
    component: aboutControl,
    name: 'AboutArea'
  }
])
export class AppComponent {

}

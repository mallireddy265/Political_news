/**
 * Created by ANKIOM on 5/3/2017.
 */
import {Component, OnInit} from "angular2/core"
// import {Router,ROUTER_DIRECTIVES} from "angular2/router";
import {Http,HTTP_PROVIDERS} from "angular2/http";
// import 'rxjs/add/operator/map'

import {HttpTestService} from "./http-component-service";
import {Router} from "angular2/router";

@Component({
  selector:'admin-form',
  templateUrl:'./dev/homePage.html',
  // template: `
  //   <h1>Hello from the {{ componentName }}!</h1>
  //   <ul *ngFor="#f of friends">
  //     <h3>Name:{{f.newstitle}}</h3>
  //     <h4>Gender:{{f.newsdescription}}</h4>
  //     <!--<li>{{f.name}},{{f.gender}}</li>-->
  //   </ul>`,
  providers: [HttpTestService]
})
export class adminControl implements OnInit{
  friends = [];
  componentName = 'FriendComponent';
  constructor(private _httpService: HttpTestService,private _router:Router){}
  ngOnInit(){
    this._httpService.getNewsData()
      .subscribe(res => {this.friends = res;
          console.log(this.friends);
        },
        (err)=>console.log(err),
        ()=>console.log("Done")
      );
}
  // getNewsData() {
  //   this._httpService.getNewsData().subscribe(
  //     data => {this.data = data},
  //     err => console.log(err),
  //     () => console.log('completed')
  //   );
  // }
  // getNews: string;
  // newstitle: string;
  // constructor(private _router: Router) {}
  //   this.newstitle = this.getNews();
  // }
  // getNews() {
  //   this.http.get('http://scsserver.alipsys.in:3010/api/apscs/getnews/1')
  //     .map(res => res.json())
  //     .subscribe((quote) => {
  //       this.newstitle = quote;
  //     });
  // }
  // Items = [];
  // constructor(private _httpService: HttpTestService){}
  // ngOnInit(){
  //   this._httpService.getNewsData()
  //     .subscribe(resitemData => this.Items = resitemData);
  // }
  //
  // getNewsData() {
  //   this._httpService.getNewsData()
  //     // .subscribe(
  //     //   data => this.getNews = JSON.stringify(data),
  //     //   error => alert(error),
  //     //   () => console.log("Finished")
  //     // )
  //     .subscribe(res=>{
  //         this.getNews=res;
  //         console.log(this.getNews); // make sure you get data here.
  //       },
  //       (err)=>console.log(err),
  //       ()=>console.log("Done")
  //     );
  // }
    // constructor(public _http: Http) {
    //    this.newsdescription = h
    // }
  // constructor(private http: Http) {}
  //
  // getData():Observable<Post[]> {
  //   return this.http.get('http://jsonplaceholder.typicode.com/posts/')
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  clickLogout() {
    alert("Are you sure want to logOut");
    this._router.navigate(['LogIn'])
  }
  // friends = [{"name": "Butter","gender": "Male"}, {"name": "Milk","gender": "Female"}, {"name": "Yogurt","gender": "Male"}, {"name": "Cheese","gender": "Female"}]
  // data: Object;
  // constructor(private http: Http) {
  //   http.get('./dev/data.json')
  //     .map(res => res.json())
  //     .subscribe(data => this.data = data,
  //       err => console.log(err),
  //       () => console.log('Completed'));
  // }
}






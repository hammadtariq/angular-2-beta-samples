import {Component} from 'angular2/core'
import {HeroFormComponent} from './hero-form.component'
@Component({
  selector: 'my-app',
  template: '<hero-form></hero-form>',
  directives: [HeroFormComponent]
})
export class AppComponent { }


// import {Component} from 'angular2/core';
// 
// @Component({
//     selector: 'my-app',
//     template: '<h1>My First Angular 2 App</h1>'
// })
// export class AppComponent { }
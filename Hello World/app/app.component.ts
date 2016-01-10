import {Component} from 'angular2/core';

@Component({
    selector: 'helloWorld',
    template: '<h1>My First {{name}} 2 App</h1>'
})
export class AppComponent { 
    name:string
    constructor(){
        this.name="Angular";
    }
}
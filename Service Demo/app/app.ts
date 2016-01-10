import {Component} from 'angular2/core';
import {AddComponent} from './components/add/add'
@Component({
    selector: 'helloService',
    template: `
    <h1>Service Demo</h1>
    <add></add>
                `,
    directives:[AddComponent]
})
export class AppComponent { 
    
}
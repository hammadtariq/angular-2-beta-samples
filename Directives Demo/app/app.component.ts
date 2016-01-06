import {Component} from 'angular2/core';
import {HighlightDirective} from './myDirective'
@Component({
    selector: 'my-app',
    directives:[HighlightDirective],
    template: `<h1>My First Attribute Directive</h1>
<h4>Pick a highlight color</h4>
<p [myHighlight]="color" [defaultColor]="'pink'">Highlight me!</p>
<div>
  <input type="radio" name="colors" (click)="color='lightgreen'">Green
  <input type="radio" name="colors" (click)="color='yellow'">Yellow
  <input type="radio" name="colors" (click)="color='cyan'">Cyan
</div>
    `
})
export class AppComponent { }
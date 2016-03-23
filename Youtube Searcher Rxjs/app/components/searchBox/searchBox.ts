import {Component,OnInit,EventEmitter,ElementRef} from 'angular2/core';
import {Result} from './../searchResultClass';
import {SearchService} from './searchService';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'search-box',
    template: `
    <input type="text" class="form-control" autofocus>
    `,
    outputs:['loading','results']
})

export class SearchBox implements OnInit {
  loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  results: EventEmitter<Result[]> = new EventEmitter<Result[]>();
  constructor(private searchService:SearchService, private el: ElementRef){}

  ngOnInit(){
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e:any)=>e.target.value)
    .filter((text:string)=> text.length > 1)
    .do((a)=>this.loading.next(true))
    .map((query: string) => this.searchService.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: Result[]) => { // on sucesss
          this.loading.next(false);
          this.results.next(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.next(false);
        },
        () => { // on completion
          this.loading.next(false);
        }
      );
  }

 }

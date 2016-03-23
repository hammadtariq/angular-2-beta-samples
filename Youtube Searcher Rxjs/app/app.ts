import {Component} from 'angular2/core';
import {SearchBox} from './components/searchBox/searchBox';
import {SearchResult} from './components/searchResult/searchResult';
import {SearchService} from './components/searchBox/searchService';
import {Result} from './components/searchResultClass';

@Component({
    selector: 'search-app',
    template: `
    <div class='container'>
      <div class="page-header">
        <h1>YouTube Search
          <img
            style="float: right;"
            *ngIf="loading"
            [src]='loadingGif' />
        </h1>
      </div>

      <div class="row">
        <div class="input-group input-group-lg col-md-12">
          <search-box
             (loading)="loading = $event"
             (results)="updateResults($event)"
              ></search-box>
        </div>
      </div>

      <div class="row">
        <search-result
          *ngFor="#result of results"
          [result]="result">
        </search-result>
      </div>
  </div>
    `,
    directives:[SearchBox,SearchResult],
    providers:[SearchService]
})

export class SearchApp {
  results:Result[];
  loadingGif:string = './app/images/loading.gif';

  updateResults(results: Result[]): void {
    this.results = results;
     console.log("results:", this.results); // uncomment to take a look
  }

 }

export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
import {Injectable,Inject} from 'angular2/core';
import {Http,Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Result} from './../searchResultClass';

@Injectable()
export class SearchService {
  constructor(public http: Http) {
    }

    search(query: string): Observable<Result[]> {
      let params: string = [
        `q=${query}`,
        `key=${YOUTUBE_API_KEY}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
      ].join('&');
      let queryUrl: string = `${YOUTUBE_API_URL}?${params}`;
      return this.http.get(queryUrl)
        .map((response: Response) => {
          return (<any>response.json()).items.map(item => {
             console.log("raw item", item);
            return new Result({
              id: item.id.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnailUrl: item.snippet.thumbnails.high.url
            });
          });
        });
    }
  }

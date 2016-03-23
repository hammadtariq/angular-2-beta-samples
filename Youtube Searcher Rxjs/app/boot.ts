import {bootstrap} from 'angular2/platform/browser'
import {bind} from 'angular2/core';
import {SearchApp} from './app'
import {HTTP_BINDINGS} from 'angular2/http';
import 'rxjs/add/operator/map';
// export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
// export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
//
// export var youTubeServiceInjectables: Array<any> = [
//   bind(YouTubeService).toClass(YouTubeService),
//   bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
//   bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
// ];

bootstrap(SearchApp,[HTTP_BINDINGS]);

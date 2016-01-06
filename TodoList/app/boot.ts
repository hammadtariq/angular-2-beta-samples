import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app'
import {MATERIAL_PROVIDERS} from 'ng2-material/all';

bootstrap(AppComponent, [MATERIAL_PROVIDERS])
  .catch(err => console.error(err));

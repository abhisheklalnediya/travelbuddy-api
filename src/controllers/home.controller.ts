// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';

import {get} from '@loopback/rest';

export class HomeController {
  constructor() {}
  @get('/hello')
  hello(): string {
    return 'Hello Ashu!';
  }
}

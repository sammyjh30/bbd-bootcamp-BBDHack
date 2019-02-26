import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg'},
    'add': {title: 'New User', subtitle: 'Create a new User Profile', content: 'Some content to add a new user.', image: 'assets/bg01.jpg'}
  };
  constructor() { }
}

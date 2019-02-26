import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  //TODO: The return result from the middleware will affect the input value.
  input = 'Press button to scan...';

  pages: Object = {
    'home': {
        title: 'Home',
        subtitle: 'Welcome Home!',
        content: 'Some home content.',
        input: this.input
      },
    'add': {
        title: 'New User', 
        subtitle: 'Create a new User Profile', 
        content: 'Some content to add a new user.'
      }
  };
  constructor() { }

}

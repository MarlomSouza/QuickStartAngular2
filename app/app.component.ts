import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`
  template: '<h1>Hello {{title}}</h1> <h2>{{hero}} details</h2>'
})
export class AppComponent  {
    title = 'Tour of heroes';
    hero = 'windstorms'; 
  }

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  open: boolean = false;

  public appPages = [
    { title: 'Home', url: 'home',  icon: 'home' },
    { title: 'Usuario', url: 'usuario', icon: 'people'},
    { title: 'Login', url: 'login', icon: 'people'}
  ];
  constructor() {}
}

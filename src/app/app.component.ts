import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import{ UserService } from './service/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularForJs';
  constructor(private userService: UserService) { }

  item$: any = new Observable<Object>
  id: string = '';
  name: string = '';
  age: string = '';


  getAll()
  {
    this.item$ = this.userService.getAll();
  }

  getCreate()
  {
    this.userService.getCreateItem({
      id: this.id,
      name: this.name,
      age: this.age
    })
    this.id = '';
    this.name = '';
    this.age = '';
  }
}


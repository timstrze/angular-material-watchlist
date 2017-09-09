import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {IUser} from './user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  User: IUser;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().then((results) => {
      // console.log(results);
      this.User = results;
    });
  }

}

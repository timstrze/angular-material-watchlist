import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';
import {IUser} from './user/user.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  User: IUser;
  users: FirebaseListObservable<any[]>;
  // db: AngularFireDatabase;

  constructor(private userService: UserService, db: AngularFireDatabase) {
    this.users = db.list('/users');
  }

  ngOnInit() {
    // this.userService.getUser().then((results) => {
    //   console.log(results);
    //   this.User = results;
    // });
  }

}

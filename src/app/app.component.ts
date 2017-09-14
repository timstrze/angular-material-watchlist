import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {UserService} from './user/user.service';
import {IUser} from './user/user.interface';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: Observable<firebase.User>;
  db: AngularFireDatabase;

  constructor(public afAuth: AngularFireAuth, db: AngularFireDatabase) {
    this.user = afAuth.authState;
    this.db = db;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((results) => {
      console.log(results);

      this.db.list('users', { query: { orderByChild: 'email', equalTo: 'timstrze@gmail.com' }}).subscribe((users) => {
        console.log(users);
      });
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}

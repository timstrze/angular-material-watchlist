import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-lists/watch-list.component';
import {WatchListService} from './watch-lists/watch-list/watch-list.service'
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {AccountService} from './account/account.service';
import {PreferenceService} from './preferences/preference/preference.service';
import { PreferencesComponent } from './preferences/preferences.component';
import { LoginComponent } from './login/login.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    PreferencesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [AccountService, PreferenceService, WatchListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

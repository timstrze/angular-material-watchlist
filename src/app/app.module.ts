import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-lists/watch-list.component';
import {WatchListService} from './watch-lists/watch-list/watch-list.service'
import {HttpModule} from '@angular/http';
import {UserService} from './user/user.service';
import {AccountService} from './account/account.service';
import {PreferenceService} from './preferences/preference/preference.service';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [AccountService, PreferenceService, WatchListService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

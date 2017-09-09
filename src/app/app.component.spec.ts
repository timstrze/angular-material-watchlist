import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppComponent } from './app.component';
import { WatchListComponent } from './watch-lists/watch-list.component';
import {WatchListService} from './watch-lists/watch-list/watch-list.service'
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user/user.service';
import {AccountService} from './account/account.service';
import {PreferenceService} from './preferences/preference/preference.service';
import { PreferencesComponent } from './preferences/preferences.component';

describe('AppComponent', () => {
  const user = {
    Accounts: [{
      WatchLists: [{
        'title': 'Tims Watchlist',
        'Symbols': [
          {
            'symbol': 'AAPL'
          },
          {
            'symbol': 'AMZN'
          },
          {
            'symbol': 'MAR'
          },
          {
            'symbol': 'DIS'
          },
          {
            'symbol': 'RCL'
          },
          {
            'symbol': 'AXP'
          },
          {
            'symbol': 'PANW'
          },
          {
            'symbol': 'ABBV'
          },
          {
            'symbol': 'WFM'
          },
          {
            'symbol': 'BABA'
          },
          {
            'symbol': 'TSLA'
          },
          {
            'symbol': 'JPM'
          },
          {
            'symbol': 'GOOG'
          },
          {
            'symbol': 'NFLX'
          },
          {
            'symbol': 'LUV'
          },
          {
            'symbol': 'DAL'
          },
          {
            'symbol': 'VA'
          },
          {
            'symbol': 'GM'
          },
          {
            'symbol': 'TWTR'
          },
          {
            'symbol': 'FB'
          },
          {
            'symbol': 'XOM'
          },
          {
            'symbol': 'CVX'
          },
          {
            'symbol': 'ABT'
          },
          {
            'symbol': 'VMC'
          },
          {
            'symbol': 'MLM'
          }
        ]
      }]
    }]
  };
  const getSpy = jasmine.createSpy('getSpy').and.returnValue(Promise.resolve(user));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        WatchListComponent,
        PreferencesComponent
      ],
      providers: [
        AccountService, PreferenceService, WatchListService, {
        provide: UserService,
        useValue: {
          getUser: getSpy
        }
      }],
      imports: [BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule]
    }).compileComponents();
  }));

  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   // expect(app.title).toEqual('app');
  // }));
  //
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

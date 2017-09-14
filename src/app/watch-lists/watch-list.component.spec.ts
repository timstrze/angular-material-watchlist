import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { WatchListComponent } from './watch-list.component';
import {WatchListService} from './watch-list/watch-list.service';

describe('WatchListComponent', () => {
  let component: WatchListComponent;
  let fixture: ComponentFixture<WatchListComponent>;
  const getSpy = jasmine.createSpy('getSpy');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchListComponent ],
      providers: [{
        provide: WatchListService,
        useValue: {
          getQuoteData: getSpy.and.returnValue(Promise.resolve({}))
        }
      }],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchListComponent);
    component = fixture.componentInstance;
    component.watchList = {
      title: 'test',
      Symbols: [{symbol: 'AAPL'}]
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

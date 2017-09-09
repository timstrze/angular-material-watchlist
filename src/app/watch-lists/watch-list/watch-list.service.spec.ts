import { TestBed, inject } from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { WatchListService } from './watch-list.service';

describe('WatchListService', () => {
  beforeEach(() => {
    const getSpy = jasmine.createSpy('getSpy');
    const putSpy = jasmine.createSpy('putSpy');
    const postSpy = jasmine.createSpy('postSpy');
    const deleteSpy = jasmine.createSpy('deleteSpy');
    TestBed.configureTestingModule({
      providers: [
        WatchListService,
        {
          provide: HttpClient,
          useValue: {
            get: getSpy.and.returnValue({
              toPromise: function () {
                return {
                  then: function () {
                    return {
                      catch: function () {
                      }
                    };
                  }
                };
              }
            }),
            post: postSpy.and.returnValue({
              toPromise: function () {
                return {
                  then: function () {
                    return {
                      catch: function () {
                      }
                    };
                  }
                };
              }
            }),
            put: putSpy.and.returnValue({
              toPromise: function () {
                return {
                  then: function () {
                    return {
                      catch: function () {
                      }
                    };
                  }
                };
              }
            }),
            delete: deleteSpy.and.returnValue({
              toPromise: function () {
                return {
                  then: function () {
                    return {
                      catch: function () {
                      }
                    };
                  }
                };
              }
            })
          }
        }
      ],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([WatchListService], (service: WatchListService) => {
    expect(service).toBeTruthy();
  }));
});

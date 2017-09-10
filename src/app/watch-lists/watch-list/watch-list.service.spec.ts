import { TestBed, inject } from '@angular/core/testing';

import { WatchListService} from './watch-list.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

describe('WatchListService', () => {
  const getSpy = jasmine.createSpy('getSpy');
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchListService, {
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
          })
        }
      }],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([WatchListService], (service: WatchListService) => {
    expect(service).toBeTruthy();
  }));

  it('getApplication should use http.get', inject([WatchListService], (service: WatchListService) => {
    service.getQuoteData();
    expect(getSpy).toHaveBeenCalled();
  }));

  it('handleResponse should return applications', inject([WatchListService], (service: WatchListService) => {
    const user = {
      'userId': 1,
      'firstName': 'firstName',
      'lastName': 'lastName',
      'userName': 'userName',
      'email': 'email'
    };
    const response = user;
    const handleResponse = service.handleResponse(response);
    expect(handleResponse).toEqual(user);
  }));

  it('handleResponse should not return anything if response is empty', inject([WatchListService], (service: WatchListService) => {
    const response = null;
    const handleResponse = service.handleResponse(response);
    expect(handleResponse).toBeFalsy();
  }));

  it('handleError should reject the Promise with a message', inject([WatchListService], (service: WatchListService) => {
    const promiseSpy = jasmine.createSpy('promiseSpy');
    Promise.reject = promiseSpy;
    const error = {
      message: 'message'
    };
    service.handleError(error);
    expect(promiseSpy).toHaveBeenCalled();
  }));

  it('handleError should reject the Promise', inject([WatchListService], (service: WatchListService) => {
    const promiseSpy = jasmine.createSpy('promiseSpy');
    Promise.reject = promiseSpy;
    const error = {};
    service.handleError(error);
    expect(promiseSpy).toHaveBeenCalled();
  }));
});

import { Injectable } from '@angular/core';

import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  siteUrl: String = 'json/user.json';

  constructor(private http: Http) { }

  getUser(): Promise<any[]> {

    return this.http.get(`${this.siteUrl}`)
      .toPromise()
      .then((response) => {
        if (response) {
          return response.json();
        }
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}

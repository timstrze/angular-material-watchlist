import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  siteUrl: String = 'json/user.json';

  constructor(private http: HttpClient) { }

  getUser(): Promise<any[]> {

    return this.http.get(`${this.siteUrl}`)
      .toPromise()
      .then((response) => {
        if (response) {
          return response;
        }
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.log(error);
  }

}

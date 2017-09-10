import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WatchListService {

  siteUrl: String = 'json/symbols.json';
  // 'https://www.google.com/finance/info?q=NASDAQ:AAPL&callback='
  // https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (":list")
  // https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (":searchVal")

  constructor(private http: HttpClient) { }

  getQuoteData(): Promise<any[]> {
    // const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    // const options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.siteUrl}`)
      .toPromise()
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  handleResponse(response) {
    if (response) {
      return response;
    }
  }

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

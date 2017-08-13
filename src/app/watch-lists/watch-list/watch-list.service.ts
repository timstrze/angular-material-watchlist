import { Injectable } from '@angular/core';

import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WatchListService {

  siteUrl: String = 'json/symbols.json';
  // 'https://www.google.com/finance/info?q=NASDAQ:AAPL&callback='
  // https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (":list")
  // https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in (":searchVal")

  constructor(private http: Http) { }

  getQuoteData(): Promise<any[]> {
    // const headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    // const options = new RequestOptions({ headers: headers });

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

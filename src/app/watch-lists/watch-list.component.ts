import {Component, Input, OnInit} from '@angular/core';
import {WatchListService} from './watch-list/watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {

  @Input() watchList: any;

  constructor(private watchListService: WatchListService) { }

  ngOnInit() {
    this.watchListService.getQuoteData().then((results) => {
      // console.log(results);
    });
  }

}

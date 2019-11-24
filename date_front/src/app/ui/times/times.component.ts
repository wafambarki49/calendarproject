import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HourTime } from 'src/app/models/HourTime';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {

  @Input('times') times: HourTime[];
  nbreTimes:number = 4;
  constructor() { }

  ngOnInit() {
  }

  onMoreClicked() {
    this.nbreTimes += 4;
   }

}

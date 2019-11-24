import { HourTime } from './../models/HourTime';
import { Component, OnInit } from '@angular/core';
import { DateApiService } from '../services/date-api.service';
import { DayTime } from '../models/DayTime';
import { NbreDays } from '../models/NbreDays';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  loadingDays = true;
  loadingTimes = true;
  dayTimes: DayTime[] = [];
  times: HourTime[] = [];
  nbreDays: NbreDays = { nbreDays: 0 };


  constructor(private dateApiService: DateApiService) { }

  ngOnInit() {
    this.dateApiService.getDays(this.nbreDays).subscribe((days: DayTime[]) => {
      this.dayTimes = days;
      this.loadingDays = false;
    });
    this.dateApiService.getTimes().subscribe((times: HourTime[]) => {
      this.times = times;
      this.loadingTimes = false;
    });
  }

  onArrowClicked(nDays) {
    this.loadingDays = true;
    this.nbreDays.nbreDays = nDays; 
    this.dateApiService.getDays(this.nbreDays).subscribe((days: DayTime[]) => {
      this.dayTimes = days;
      this.loadingDays = false;
    });
  }
 
  


}

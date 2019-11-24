import { HourTime } from './../models/HourTime';
import { NbreDays } from './../models/NbreDays';
import { DayTime } from './../models/DayTime';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateApiService {

  URL = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getDays(nbreDays: NbreDays): Observable<DayTime[]> {
    return this.httpClient.post<DayTime[]>(this.URL + 'days', nbreDays);
  }


  getTimes(): Observable<HourTime[]> {
    return this.httpClient.get<HourTime[]>(this.URL + 'times');
  }
}

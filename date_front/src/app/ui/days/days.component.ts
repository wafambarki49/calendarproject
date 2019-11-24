import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DayTime } from 'src/app/models/DayTime';
import { NbreDays } from 'src/app/models/NbreDays';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent implements OnInit {

  @Input('days') days: DayTime[];
  @Input('nbreDays') nbreDays: number;
  @Output('onNextClicked') nextClicked: EventEmitter<number> =  new EventEmitter();
  @Output('onPrevClicked') prevClicked: EventEmitter<number> =  new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onPrevClicked(){
    this.nbreDays --;
    this.prevClicked.emit(this.nbreDays);
  }

  OnNextClicked(){
    this.nbreDays ++;
    this.nextClicked.emit(this.nbreDays);
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CurrentDateTimeService } from './../../../shared/services/current-date-time.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: semicolon
  public currentDateTime$: BehaviorSubject<moment.Moment>

  constructor(
    private currentDateTimeService: CurrentDateTimeService
  ) { }

  ngOnInit(): void {
    this.currentDateTime$ = this.currentDateTimeService.currentDateTime$
  }

  ngOnDestroy(): void {}

}

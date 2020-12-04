import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as moment from 'moment'
import { HttpClient } from '@angular/common/http';

import { environment } from './../../../environments/environment'
import {
  map,
  take
} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CurrentDateTimeService {
  public currentDateTime$: BehaviorSubject<moment.Moment> = new BehaviorSubject(null)
  
  constructor(private httpClient: HttpClient) { 
    this.init()
  }

  private init(): void {
    this.httpClient.get<any>(
      environment.worldClock
    ).pipe(
      take(1),
      map((utcTime: any) => moment(utcTime.currentDateTime))
    ).subscribe((currentDateTime) => {
      this.currentDateTime$.next(currentDateTime)
    })
  }
}

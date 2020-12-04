import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CurrentDateTimeService } from 'src/app/shared/services/current-date-time.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public currentDateTime: string

  constructor(public currentDateTimeService: CurrentDateTimeService) { }

  ngOnInit(): void {}

}

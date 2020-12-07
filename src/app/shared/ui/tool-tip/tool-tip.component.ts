import { DynamicComponent } from './../interfaces/dynamic-component';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss']
})
export class ToolTipComponent implements OnInit, DynamicComponent {
  public close: Subject<null> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

}

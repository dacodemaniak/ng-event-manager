import { DynamicComponent } from './../interfaces/dynamic-component';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit, DynamicComponent {

  public close: Subject<null> = new Subject();

  public itemList: any[];

  constructor() { }

  public closeSubMenu(): void {
    this.close.next();
  }

  public filterItem(): boolean {
    return this.itemList.filter((obj: any) => obj.display).length > 0;
  }

  ngOnInit(): void {
    this.itemList = [
      {
        id: 1,
        title: 'Item 1',
        childrenItems: [
          {
            id: 10,
            title: 'Item 1.1',
            childrenItems: []
          },
          {
            id: 11,
            title: 'Item 1.2',
            childrenItems: []
          },
        ],
        display: true
      },
      {
        id: 2,
        title: 'Item 2',
        childrenItems: [],
        display: true
      },
      {
        id: 3,
        title: 'Item 3',
        childrenItems: [
          {
            id: 20,
            title: 'Item 3.1',
            childrenItems: []
          },
          {
            id: 21,
            title: 'Item 3.2',
            childrenItems: []
          },
        ],
        display: true
      }
    ];
  }

}

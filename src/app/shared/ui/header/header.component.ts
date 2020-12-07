import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showButton = false;
  public defferedPrompt: any;

  @HostListener('window:beforeinstallprompt', ['$event']) onBeforeInstallPrompt(e: { preventDefault: () => void}) {
    e.preventDefault();
    this.defferedPrompt = e;
    this.showButton = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

  public addToHomeScreen(): void {
    this.showButton = false;
    this.defferedPrompt.prompt();
    this.defferedPrompt.userChoice
      .then((choiceResult: {outcome: string}) => {
        this.defferedPrompt = null;
      });
  }
}

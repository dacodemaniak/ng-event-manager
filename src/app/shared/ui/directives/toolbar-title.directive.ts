import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appToolbarTitle]'
})
export class ToolbarTitleDirective implements OnInit {

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit() {
    const nativeElement = this.element.nativeElement
    // Native JS
    nativeElement.classList.add('toolbar-title')
  }

}

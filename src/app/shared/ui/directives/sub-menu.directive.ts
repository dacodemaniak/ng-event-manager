import { ToolTipComponent } from './../tool-tip/tool-tip.component';
import { DynamicComponent } from './../interfaces/dynamic-component';
import { SubMenuComponent } from './../sub-menu/sub-menu.component';
import { ComponentFactory, Directive, HostListener, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appSubMenu]'
})
export class SubMenuDirective implements OnInit {
  @Input() private componentType: string;

  /**
   * Handle subMenu status
   * @var boolean
   */
  public isOpen = false;

  private components: any[] = [];

  public subMenuComponentFactory: ComponentFactory<DynamicComponent>;

  public subMenuRef: ComponentRef<DynamicComponent>;

  @HostListener('click') toggleSubMenu() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  constructor(
    private componentResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  public ngOnInit(): void {
    this.components.push(
      {
        type: 'submenu',
        component: SubMenuComponent
      },
      {
        type: 'tooltip',
        component: ToolTipComponent
      }
    );
    console.log('Component type : ', this.componentType);
    const componentObj = this.components.find((obj: any) => obj.type === this.componentType);

    if (componentObj === undefined) {
      this.subMenuComponentFactory = this.componentResolver.resolveComponentFactory(SubMenuComponent);
    } else {
      this.subMenuComponentFactory = this.componentResolver.resolveComponentFactory(componentObj.component);
    }
  }
  private open(): void {
    this.viewContainerRef.clear(); // DOM Manipulation
    this.subMenuRef = this.viewContainerRef.createComponent(this.subMenuComponentFactory);
    this.isOpen = true;

    this.subMenuRef.instance.close.subscribe(() => {
      this.subMenuRef.instance.close.unsubscribe(); // Sinon, souscription sur un sujet qui n'existera plus
      this.subMenuRef.destroy();
      this.viewContainerRef.clear(); // DOM Reconciliation
      this.isOpen = false;
    });

    console.log('Open component');
  }

  private close(): void {
    this.subMenuRef.instance.close.next();
  }

}

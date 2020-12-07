import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ToolbarTitleDirective } from './directives/toolbar-title.directive';
import { SubMenuDirective } from './directives/sub-menu.directive';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToolbarTitleDirective, SubMenuDirective, SubMenuComponent, ToolTipComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UiModule { }

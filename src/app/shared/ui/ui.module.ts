import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ToolbarTitleDirective } from './directives/toolbar-title.directive'

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    ToolbarTitleDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class UiModule { }

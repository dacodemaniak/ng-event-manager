import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './shared/ui/ui.module';

import { fakeBackendProvider } from './shared/services/fake-backend.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UiModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

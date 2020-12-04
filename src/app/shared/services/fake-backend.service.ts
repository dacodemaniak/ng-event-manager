import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http'

import { Observable } from 'rxjs';

@Injectable()
export class FakeBackendService implements HttpInterceptor {

  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request

    console.log(`Request ${url} was intercepted`)
    return next.handle(request)
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}

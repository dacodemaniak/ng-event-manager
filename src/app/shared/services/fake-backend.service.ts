import { UserModel } from './../../core/models/user-model';
import { Injectable } from '@angular/core';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http'

import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

let users: UserModel[] = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendService implements HttpInterceptor {

  constructor() { }

  /**
   * intercept
   * @param request HttpRequest
   * @param next  HttpHandler
   * Intercepte une requête HTTP
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request

    console.log(`Request ${url} was intercepted`)

    return of(null)
      .pipe(
        mergeMap(handleRoute)
      ).pipe(
        materialize()
      ).pipe(
        delay(500)
      ).pipe(
        dematerialize()
      );

    function handleRoute(): Observable<HttpEvent<any>> {
      const userRegex: RegExp = /\/api\/v2\/user+$/;
      switch (true) {
        case userRegex.test(url) && method === 'POST':
          return registerUser(request);
        default:
          return next.handle(request);
      }

      // route functions

      function registerUser(request: HttpRequest<any>): Observable<HttpResponse<any>> {
        const user: UserModel = request.body;
        user.id = users.length + 1;
        users.push(user);
        // Persister le tableau entier
        localStorage.setItem('users', JSON.stringify(users));
        // Retourner l'observable du User créé
        return ok(user);
      }

      // helper functions

      function ok(body?: any): Observable<HttpResponse<any>> {
        return of(new HttpResponse({ status: 200, body }));
      }

      function error(message): Observable<never> {
        return throwError({ error: { message } });
      }

      function unauthorized(): Observable<never> {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
      }

      function isLoggedIn(): boolean {
        return headers.get('Authorization') === 'Bearer fake-jwt-token';
      }

      function idFromUrl(): number {
        const urlParts = url.split('/');
        return +urlParts[urlParts.length - 1];
      }

    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendService,
  multi: true
}

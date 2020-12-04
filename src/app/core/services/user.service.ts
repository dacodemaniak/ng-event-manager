import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user-model';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public add(userForm: any): Observable<UserModel> {
    return this.httpClient.post(
      'http://localhost:4200/api/v2/user',
      new UserModel().deserialize(userForm)
    ).pipe(
      take(1),
      map((user: UserModel) => user)
    );
  }
}

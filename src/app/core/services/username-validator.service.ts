import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsernameValidatorService {

  constructor(private userService: UserService) { }

  public alreadyExists(control: FormControl): Promise<any> { // Promise ValidatorFn
    return new Promise((resolve) => {
      this.userService.find(control.value)
        .pipe(
          take(1)
        )
        .subscribe((response: any) => {
          if (response.status === 200) {
            resolve(null);
          } else {
            resolve({alreadyExists: true});
          }
        }, (error) => {
          resolve({alreadyExists: true});
        });
    });
  }
}

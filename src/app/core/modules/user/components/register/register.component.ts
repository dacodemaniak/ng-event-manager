import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentDateTimeService } from './../../../../../shared/services/current-date-time.service';
import { MustMatch } from './../../../../../shared/validators/must-match';
interface MessageInterface {
  type: string
  message: string
}
interface ValidationMessageInterface {
  username: MessageInterface[]
  password: MessageInterface[]
  confirmPassword: MessageInterface[]
  email: MessageInterface[]
  confirmEmail: MessageInterface[]
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup

  public validationMessages: ValidationMessageInterface

  constructor(
    public currentDateTimeService: CurrentDateTimeService,
    private formBuilder: FormBuilder
  ) { }

  public get username(): AbstractControl {
    return this.registerForm.controls.username;
  }

  public get fc(): any {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    this.setValidationMessages();

    this.registerForm = this.formBuilder.group({
      username: [
        '', // Initial value
        [
          Validators.required,
          Validators.minLength(5)
        ]
      ],
      password: [
        '',
        Validators.required
      ],
      confirmPassword: [
        '',
        Validators.required
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ],
      confirmEmail: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email
        ])
      ]
    }, {
      validator: [
        MustMatch('password', 'confirmPassword'),
        MustMatch('email', 'confirmEmail')
      ]
    });
  }

  private setValidationMessages(): void {
    this.validationMessages = {
      username: [
        {
          type: 'required',
          message: 'Le username est requis'
        },
        {
          type: 'minlength',
          message: 'Le username doit comporter au minimum 5 caractères'
        }
      ],
      password: [
        {
          type: 'required',
          message: 'Le mot de passe est requis'
        }
      ],
      confirmPassword: [
        {
          type: 'required',
          message: 'Le mot de passe est requis'
        }
      ],
      email: [
        {
          type: 'required',
          message: 'L\'email est requis'
        },
        {
          type: 'email',
          message: 'Cet email est non conforme'
        }
      ],
      confirmEmail: [
        {
          type: 'required',
          message: 'L\'email est requis'
        },
        {
          type: 'email',
          message: 'Cet email est non conforme'
        }
      ]
    }
  }
}

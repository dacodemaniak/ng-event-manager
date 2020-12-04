import { FormGroup, AbstractControl } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control: AbstractControl = formGroup.controls[controlName]
    const matchingControl: AbstractControl = formGroup.controls[matchingControlName]

    // Stop si l'un ou l'autre des contrôles est déjà en erreur
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true})
    } else {
      matchingControl.setErrors(null)
    }
  }
}
